package com.example.url.controller;

import com.example.url.entity.URL;
import com.example.url.service.URLService;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/url")
public class URLController {
    public URLService urlService;

    public URLController(URLService urlService) {
        this.urlService = urlService;
    }

    @PostMapping("")
    public String createURL(@RequestBody URL url) {
        return urlService.createURL(url);
    }
}
