package org.example.config

import com.fasterxml.jackson.annotation.JsonFormat
import mu.KLogging
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.MethodArgumentNotValidException
import org.springframework.web.bind.annotation.ControllerAdvice
import org.springframework.web.bind.annotation.ExceptionHandler
import javax.persistence.NoResultException
import javax.persistence.NonUniqueResultException

@JsonFormat(shape = JsonFormat.Shape.OBJECT)
enum class ErrorDescriptor(val code: Long, val descriptor: String) {
    INVALID_ARGUMENT(1000L, "invalid argument"),
    NO_RESULT(1001L, "no result")
}

data class Response(val message: String?, val errorDescriptor: ErrorDescriptor)

@ControllerAdvice
class GlobalExceptionHandler {
    companion object: KLogging()

    @ExceptionHandler(value = [IllegalArgumentException::class, MethodArgumentNotValidException::class])
    fun handleIllegalException(ex: Exception): ResponseEntity<*> {
        logger.error("Illegal argument!", ex)
        return ResponseEntity<Response>(Response(ex.message, ErrorDescriptor.INVALID_ARGUMENT), HttpStatus.BAD_REQUEST)
    }

    @ExceptionHandler(value = [NoResultException::class, NonUniqueResultException::class])
    fun handleNoResultException(ex: Exception): ResponseEntity<*> {
        logger.error("No result!", ex)
        return ResponseEntity<Response>(Response(ex.message, ErrorDescriptor.NO_RESULT), HttpStatus.BAD_REQUEST)
    }
}