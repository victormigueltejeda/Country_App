import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [],
})
export class ByCapitalPageComponent implements OnInit {
  constructor(private countryService: CountriesService) {}
  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byCapital.countries;
    this.initialValue = this.countryService.cacheStore.byCapital.term;
  }

  searchByCapital(term: string): void {
    this.isLoading = true;

    this.countryService.searchCapital(term).subscribe((countris) => {
      this.countries = countris;
      this.isLoading = false;
    });
  }
}
