package com.example.agendaback.model.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class ContactDTO {
    private Integer id;
    private String firstName;
    private String lastName;
    private String email;
    private Integer phoneNumber;
    private Date birthday;
}
