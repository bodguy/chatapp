package org.example.repository

import org.example.domain.QUser.user
import org.example.domain.User
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository
import javax.persistence.EntityManager
import javax.persistence.PersistenceContext

interface MyRepository {
    fun findByUsername(username: String): User?
}

@Repository
interface UserRepository: JpaRepository<User, Long>, MyRepository {
    override fun findByUsername(username: String): User?
}

@Repository
class JPQLUserRepository(
    @PersistenceContext val em: EntityManager
): MyRepository {
    override fun findByUsername(username: String): User? {
        val query = em.createQuery("select u from User u where u.username = :username", User::class.java)
            .setParameter("username", username)
        return query.singleResult
    }
}

@Repository
interface JPQLAnnotationUserRepository: CrudRepository<User, Long>, MyRepository {
    @Query("select u from User u where u.username = :username")
    override fun findByUsername(username: String): User?
}

@Repository
class CriteriaUserRepository(
    @PersistenceContext val em: EntityManager
): MyRepository {
    override fun findByUsername(username: String): User? {
        val cb = em.criteriaBuilder
        val cq = cb.createQuery(User::class.java)
        val m = cq.from(User::class.java)

        val usernameEq = cb.equal(m.get<String>("username"), username)
        return em.createQuery(cq.select(m).where(usernameEq)).singleResult
    }
}

@Repository
class QueryDslUserRepository: QuerydslRepositorySupport(User::class.java), MyRepository {
    override fun findByUsername(username: String): User? = from(user).where(user.username.eq(username)).fetchOne()
}

@Repository
class NativeSQLUserRepository(
    @PersistenceContext val em: EntityManager
): MyRepository {
    override fun findByUsername(username: String): User? {
        val nativeQuery = em.createNativeQuery("SELECT u.* FROM user u WHERE u.username = ?1", User::class.java)
            .setParameter(1, username)
        return nativeQuery.singleResult as User
    }
}