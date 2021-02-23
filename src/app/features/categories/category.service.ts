import { Injectable } from "@angular/core";
import { AppConfigurationService } from 'src/app/core/app-configuration/app-configuration.service';
import { HttpService } from 'src/app/core/http/http.service';
import { Artist, Designer, Mechanic } from 'src/app/models/categories.model';

@Injectable()
export class CategoryService {

    private get apiBaseUri() { return `${this.appConfigService.getAppConfig('apiBaseUri')}/api/category`; }

    constructor(
        private readonly httpService: HttpService,
        private readonly appConfigService: AppConfigurationService) { }

    addArtist(artist: Artist) {
        return this.httpService.post<Artist>(`${this.apiBaseUri}/addArtist`, artist, true);
    }

    getArtists() {
        return this.httpService.get<Artist[]>(`${this.apiBaseUri}/getArtists`);
    }

    deleteArtist(id: number) {
        return this.httpService.post<Artist>(`${this.apiBaseUri}/deleteArtist`, { id }, true);
    }

    addDesigner(designer: Designer) {
        return this.httpService.post<Artist>(`${this.apiBaseUri}/addDesigner`, designer, true)
    }

    getDesigners() {
        return this.httpService.get<Designer[]>(`${this.apiBaseUri}/getDesigners`)
    }

    deleteDesigner(id: number) {
        return this.httpService.post<Designer>(`${this.apiBaseUri}/deleteDesigner`, { id }, true)
    }

    addMechanic(mechanic: Mechanic) {
        return this.httpService.post<Artist>(`${this.apiBaseUri}/addMechanics`, mechanic, true)
    }

    getMechanics() {
        return this.httpService.get<Mechanic[]>(`${this.apiBaseUri}/getMechanics`)
    }

    deleteMechanic(id: number) {
        return this.httpService.post<Mechanic>(`${this.apiBaseUri}/deleteMechanics`, { id }, true)
    }
}