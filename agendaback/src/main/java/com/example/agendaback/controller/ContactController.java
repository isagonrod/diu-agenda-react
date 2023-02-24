package com.example.agendaback.controller;

import com.example.agendaback.model.Contact;
import com.example.agendaback.model.dto.ContactDTO;
import com.example.agendaback.service.ContactService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequiredArgsConstructor
public class ContactController {
    @Autowired
    private ContactService service;

    @GetMapping("/contact")
    public ResponseEntity<?> getAllContacts() {
        return ResponseEntity.ok(service.getAllContacts());
    }

    @GetMapping("/contact/{id}")
    public ResponseEntity<?> getContactById(@PathVariable Integer id) {
        return ResponseEntity.ok(service.getContactById(id));
    }

    @PostMapping("/contact")
    public ResponseEntity<ContactDTO> createContact(@Validated @RequestBody Contact contact) {
        return ResponseEntity.status(HttpStatus.CREATED).body(service.saveContact(contact));
    }

    @PutMapping("/contact/{id}")
    public ResponseEntity<?> updateContact(@PathVariable Integer id, @RequestBody Contact contact) {
        contact.setId(id);
        return ResponseEntity.ok(service.saveContact(contact));
    }

    @DeleteMapping("/contact/{id}")
    public ResponseEntity<?> deleteContact(@PathVariable Integer id) {
        service.deleteContact(id);
        return ResponseEntity.noContent().build();
    }
}
