package com.example.url.controller;

import com.example.url.entity.URL;
import com.example.url.service.URLService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.ExecutionException;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/url")
public class URLController {

    @Autowired
    public URLService urlService;

    @PostMapping("")
    public URL createURL(@RequestBody URL url) {
        return urlService.createURL(url);
    }

    @DeleteMapping("/{id}")
    public String deleteURL(@PathVariable("id") String id) {
        return urlService.deleteURL(id);
    }

    @PutMapping("/{id}")
    public URL updateURL(@PathVariable("id") String id, @RequestBody URL url) {
        return urlService.updateURL(id, url);
    }

    @GetMapping("")
    public List<URL> getAllURL() {
        return urlService.getAllURL();
    }

    @GetMapping("/{id}")
    public URL getURL(@PathVariable("id") String id) {
        return urlService.getURLById(id);
    }

}
