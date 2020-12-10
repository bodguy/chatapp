package org.example.utils

import javax.persistence.AttributeConverter
import javax.persistence.Converter

@Converter
class CipherConverter: AttributeConverter<String, String> {

    override fun convertToDatabaseColumn(attribute: String?): String {
        TODO("Not yet implemented")
    }

    override fun convertToEntityAttribute(dbData: String?): String {
        TODO("Not yet implemented")
    }
}