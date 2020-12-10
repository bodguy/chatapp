package org.example.domain

import org.example.enum.UserStatus
import org.example.utils.CipherConverter
import java.time.LocalDateTime
import javax.persistence.*

@Entity
@Table(name = "user", indexes = [
    Index(columnList = "username")
])
data class User(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id", nullable = false)
    var id: Long,

    @Column(nullable = false, unique = true)
    @Convert(converter = CipherConverter::class)
    var username: String,

    @Column(nullable = false)
    @Convert(converter = CipherConverter::class)
    var password: String,

    @Column(nullable = false)
    @Convert(converter = CipherConverter::class)
    var email: String,

    var image: String? = null,

    var lastLoginDateTime: LocalDateTime? = null,

    var lastLoginIpAddress: String? = null,

    var mobileNumber: String? = null,

    @Column(length = 300)
    var description: String? = null,

    @Enumerated(value = EnumType.STRING)
    @Column(nullable = false)
    var userStatus: UserStatus = UserStatus.WAITING
): BaseTimeEntity()