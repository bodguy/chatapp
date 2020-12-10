package org.example.service

import org.example.domain.User
import org.example.dto.UserDto
import org.example.repository.*
import org.springframework.stereotype.Service

@Service
class UserService(
        val userRepository: UserRepository,
        val jpqlUserRepository: JPQLUserRepository,
        val criteriaUserRepository: CriteriaUserRepository,
        val queryDslUserRepository: QueryDslUserRepository,
        val nativeSQLUserRepository: NativeSQLUserRepository,
        val jpqlAnnotationUserRepository: JPQLAnnotationUserRepository
) {
    fun getUserByUsername(username: String) = UserDto.create(userRepository.findByUsername(username))

    fun getUserByUsernameJPQL(username: String) = UserDto.create(jpqlUserRepository.findByUsername(username))

    fun getUserByUsernameCriteria(username: String) = UserDto.create(criteriaUserRepository.findByUsername(username))

    fun getUserByUsernameQueryDSL(username: String) = UserDto.create(queryDslUserRepository.findByUsername(username))

    fun getUserByUsernameNativeSQL(username: String) = UserDto.create(nativeSQLUserRepository.findByUsername(username))

    fun getUserByUsernameJPQLAnnotation(username: String) = UserDto.create(jpqlAnnotationUserRepository.findByUsername(username))

    fun saveUser(user: User) = UserDto.create(userRepository.save(user))
}