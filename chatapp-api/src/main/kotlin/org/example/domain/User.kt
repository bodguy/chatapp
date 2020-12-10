package org.example.domain

import org.example.dto.UserRegistParam
import javax.persistence.*

@Entity
@Table(name = "user", indexes = [
    Index(columnList = "username")
], uniqueConstraints = [
    UniqueConstraint(columnNames = ["username", "email"])
])
data class User(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id", nullable = false)
    var id: Long? = null,

    @Column(name = "username", nullable = false)
    var username: String,

    @Column(name = "password", nullable = false)
    var password: String,

    @Column(name = "email")
    var email: String? = null
) {
    companion object {
        fun createFromUserRegistParam(userRegistParam: UserRegistParam) = User(
            id = null,
            username = userRegistParam.username,
            password = userRegistParam.password,
            email = userRegistParam.email
        )
    }
}