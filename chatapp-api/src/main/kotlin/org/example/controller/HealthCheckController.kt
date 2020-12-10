package org.example.controller

import mu.KLogging
import org.springframework.core.env.Environment
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class HealthCheckController(
    private val env: Environment
) {
    companion object : KLogging()

    @GetMapping("/l7check")
    fun healthCheck(): ResponseEntity<List<String>> {
        val profiles = env.activeProfiles
        return ResponseEntity.ok().body(profiles.asList())
    }
}