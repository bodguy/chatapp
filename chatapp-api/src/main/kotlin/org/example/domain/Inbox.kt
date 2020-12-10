package org.example.domain

import javax.persistence.*

@Entity
@Table(name = "feed")
data class Inbox(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "inbox_id", nullable = false)
    var id: Long,

    var image: String? = null,

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    var user: User
): BaseTimeEntity()
