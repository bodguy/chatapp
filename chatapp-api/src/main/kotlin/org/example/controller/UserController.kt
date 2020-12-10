package org.example.controller

import org.example.domain.User
import org.example.dto.UserDto
import org.example.dto.UserRegistParam
import org.example.service.UserService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.lang.IllegalArgumentException
import javax.validation.Valid

@RestController
class UserController(
    private val userService: UserService
) {

    @GetMapping("/user/{username}/{version}")
    fun getUser(@PathVariable username: String, @PathVariable version: Int): ResponseEntity<UserDto> {
        val userDto = when (version) {
            1 -> userService.getUserByUsername(username)
            2 -> userService.getUserByUsernameJPQL(username)
            3 -> userService.getUserByUsernameCriteria(username)
            4 -> userService.getUserByUsernameQueryDSL(username)
            5 -> userService.getUserByUsernameNativeSQL(username)
            6 -> userService.getUserByUsernameJPQLAnnotation(username)
            else -> throw IllegalArgumentException("invalid version number!")
        }
        return ResponseEntity.ok(userDto)
    }

    @PostMapping("/user/regist")
    fun registUser(@RequestBody @Valid userRegistParam: UserRegistParam): ResponseEntity<UserDto> {
        val userDto = userService.saveUser(User.createFromUserRegistParam(userRegistParam))
        return ResponseEntity.ok(userDto)
    }
}