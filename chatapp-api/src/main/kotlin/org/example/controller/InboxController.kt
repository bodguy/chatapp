package org.example.controller

import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController("/inbox")
class InboxController {

    @GetMapping
    fun getInbox(): ResponseEntity<*> {
        return ResponseEntity.ok("")
    }
}