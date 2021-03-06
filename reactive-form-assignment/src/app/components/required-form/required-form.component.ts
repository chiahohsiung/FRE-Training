import { Component, OnInit } from "@angular/core"
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { confirmPassword } from "src/app/validators/confirmPassword.validator"

@Component({
    selector: "required-form",
    templateUrl: "./required-form.component.html",
    styleUrls: ["./required-form.component.less"],
})
export class RequiredFormComponent implements OnInit {
    title = "Welcome to Reactive Forms!"
    requiredForm: FormGroup
    open: boolean

    constructor(private fb: FormBuilder) {
        this.open = false
        this.requiredForm = this.fb.group(
            {
                name: ["", Validators.required],
                mobileNumber: [
                    "",
                    Validators.compose([
                        Validators.required,
                        Validators.pattern("^[0-9]*$"),
                        Validators.minLength(10),
                    ]),
                ],
                email: [
                    "",
                    Validators.compose([
                        Validators.required,
                        Validators.email,
                    ]),
                ],
                password: [
                    "",
                    Validators.compose([
                        Validators.required,
                        Validators.minLength(7),
                    ]),
                ],
                password2: ["", Validators.required],
            },
            { validators: confirmPassword }
        )
    }

    ngOnInit(): void {}

    onSubmit(): void {
        this.open = true
    }
}
