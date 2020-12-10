package org.example.enum

enum class UserStatus(
    val description: String
) {
    NORMAL("NORMAL"),
    WAITING("WAITING"),
    BLOCKED("BLOCKED")
}