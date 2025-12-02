package de.ochota.gm_assistant_backend.service;

import de.ochota.gm_assistant_backend.model.Region;
import de.ochota.gm_assistant_backend.repository.IRegionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RegionService {
    @Autowired
    private IRegionRepository regionRepository;

    public Region getRegionById(String id) {
        return regionRepository.findById(id).get();
    }
}
