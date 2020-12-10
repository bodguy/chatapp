package org.example.domain

import javax.persistence.*

@Entity
@Table(name = "message")
data class Message(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "message_id", nullable = false)
    var id: Long,

    @Column(length = 500, nullable = false)
    var message: String,

    @Column(nullable = true)
    var referenceId: Long,

    @ManyToOne
    @JoinColumn(name = "inbox_id", nullable = false)
    var inbox: Inbox,

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    var user: User
): BaseTimeEntity()