package com.example.agendaback.model.dto.converter;

import com.example.agendaback.model.Contact;
import com.example.agendaback.model.dto.ContactDTO;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Component
@RequiredArgsConstructor
public class ContactDTOConverter {
    private static final ModelMapper modelmapper = new ModelMapper();

    public static ContactDTO convertToDto(Contact contact) {
        return modelmapper.map(contact, ContactDTO.class);
    }

    public static List<ContactDTO> convertListToDto(List<Contact> contactList) {
        List<ContactDTO> contactDTOList = new ArrayList<>();
        for (Contact contact : contactList) {
            contactDTOList.add(modelmapper.map(contact, ContactDTO.class));
        }
        return contactDTOList;
    }

    public static ContactDTO convertToDto(Optional<Contact> contactById) {
        return modelmapper.map(contactById, ContactDTO.class);
    }
}
