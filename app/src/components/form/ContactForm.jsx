import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const genericReqString = "This field is required";
const fnameReqString = "The name needs to be at least 3 characters long";
const lnameReqString = "The name needs to be at least 4 characters long";
const emailReqString = "Please enter an email";
// const messageReqString = "The name needs to be at least 10 characters long";


const schema = yup
    .object()
    .shape({
        fname: yup.string().required(genericReqString).min(3, fnameReqString),
        lname: yup.string().required(genericReqString).min(4, lnameReqString),
        email: yup.string().required(genericReqString).email(emailReqString),
        // message: yup.string().min(10, messageReqString).required()
    }).required();


function ContactForm() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    console.log(errors);

    return (
        // label is intentionally wrapping the input field to let the user select the field by clicking/tapping the entire element.
        <form className="form" onSubmit={handleSubmit((data) => console.log(data))}>
            <div className="form-group">
                <label>
                    <span>First name</span><br />
                    <input {...register("fname")} placeholder="First name" />
                    {errors.fname && <span><br />{errors.fname.message}</span>}
                </label>
            </div>
            <div className="form-group">
                <label>
                    <span>Last name</span><br />
                    <input {...register("lname")} placeholder="Last name" />
                    {errors.lname && <span><br />{errors.lname.message}</span>}
                </label>
            </div>
            <div className="form-group">
                <label>
                    <span>Email</span><br />
                    <input {...register("email")} placeholder="email@example.com"/>
                    {errors.email && <span><br />{errors.email.message}</span>}
                </label>
            </div>

            <div className="form-group">
                <label>
                    <span>Message</span><br />
                    <textarea {...register("message")} name="" id="" cols="30" rows="10"></textarea>
                    {errors.message && <span><br />{errors.message.message}</span>}
                </label>
            </div>

            <button type="submit" className="btn btn-primary">Send</button>
        </form>

        // Create a form with the following inputs and validation:

        // -   Last name - required, minimum 4 characters
        // -   Email - required, must be in a valid email format
        // -   Message - required, minimum 10 characters.
    );
}

export default ContactForm;