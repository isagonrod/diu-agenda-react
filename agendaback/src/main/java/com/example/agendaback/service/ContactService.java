package com.example.agendaback.service;

import com.example.agendaback.model.Contact;
import com.example.agendaback.model.dto.ContactDTO;
import com.example.agendaback.model.dto.converter.ContactDTOConverter;
import com.example.agendaback.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContactService {
    @Autowired
    private ContactRepository repository;

    public List<ContactDTO> getAllContacts() {
        return ContactDTOConverter.convertListToDto(repository.findAll());
    }

    public ContactDTO getContactById(Integer id) {
        return ContactDTOConverter.convertToDto(repository.findById(id));
    }

    public ContactDTO saveContact(Contact contact) {
        return ContactDTOConverter.convertToDto(repository.save(contact));
    }

    public void deleteContact(Integer id) {
        repository.deleteById(id);
    }
}
