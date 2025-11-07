import InputField from "./InputField";

export default function SignupInputField({ values, onChange }) {
    return (
        <>
        <InputField label="Email" name="email" type="email" placeholder="Enter your email" value={values?.email || ''} onChange={onChange} />
        <InputField label="First Name" name="firstName" type="text" placeholder="Enter your first name" value={values?.firstName || ''} onChange={onChange} />
        <InputField label="Last Name" name="lastName" type="text" placeholder="Enter your last name" value={values?.lastName || ''} onChange={onChange} />
        <InputField label="Password" name="password" type="password" placeholder="Enter your password" value={values?.password || ''} onChange={onChange} />
        <InputField label="Confirm Password" name="confirmPassword" type="password" placeholder="Confirm your password" value={values?.confirmPassword || ''} onChange={onChange} />
        </>
    )
}