import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [],
})
export class CountryPageComponent implements OnInit {
  public country?: Country;
  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private countrieService: CountriesService
  ) {}

  ngOnInit(): void {
    this.activateRoute.params
      .pipe(
        switchMap(({ id }) => this.countrieService.searchCountryByAlphaCode(id))
      )
      .subscribe((countries) => {
        if (!countries) return this.router.navigateByUrl('');

        return (this.country = countries);
      });
  }
}
