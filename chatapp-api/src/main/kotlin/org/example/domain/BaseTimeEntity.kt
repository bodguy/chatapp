package org.example.domain

import org.springframework.data.annotation.CreatedDate
import org.springframework.data.annotation.LastModifiedDate
import org.springframework.data.jpa.domain.support.AuditingEntityListener
import java.time.LocalDateTime
import javax.persistence.Column
import javax.persistence.EntityListeners
import javax.persistence.MappedSuperclass

@MappedSuperclass
@EntityListeners(AuditingEntityListener::class)
abstract class BaseTimeEntity {
    @CreatedDate
    @Column(name = "create_date_time", nullable = false)
    lateinit var create_date_time: LocalDateTime

    @LastModifiedDate
    @Column(name = "update_date_time", nullable = false)
    lateinit var update_date_time: LocalDateTime
}
