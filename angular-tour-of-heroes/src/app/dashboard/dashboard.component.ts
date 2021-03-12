import { Component, OnInit } from "@angular/core"
import { Hero } from "../hero"
import { HeroService } from "../hero.service"

@Component({
    selector: "app-dashboard",
    templateUrl: "./dashboard.component.html",
    styleUrls: ["./dashboard.component.less"],
    template: `<div class="heroes-menu">
        <a
            *ngFor="let hero of heroes"
            routerLink="/detail/{{ hero.id }}"
        >
            {{ hero.name }}
        </a>
    </div>`,
})
export class DashboardComponent implements OnInit {
    heroes: Hero[]
    constructor(private heroService: HeroService) {
        this.heroes = []
    }

    ngOnInit(): void {
        this.getHeroes()
    }
    getHeroes(): void {
        let observer = {
            next: (heroes: Hero[]) =>
                (this.heroes = heroes.slice(1, 5)),
            error: (err) => console.log(err),
            complete: () => {},
        }
        this.heroService.getHeroes().subscribe(observer)
    }
}
