package org.example.dto

import org.example.domain.User
import org.hibernate.validator.constraints.Length
import javax.validation.constraints.Email
import javax.validation.constraints.NotBlank

data class UserDto(
    var username: String,
    var email: String? = null
) {
    companion object {
        fun create(user: User?): UserDto {
            requireNotNull(user, { "user not found!" })
            return UserDto(username = user.username, email = user.email)
        }
    }
}

data class UserRegistParam(
    @field: NotBlank val username: String,
    @field: NotBlank @field: Length(max = 30) val password: String,
    @field: NotBlank @field: Email val email: String
)