import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import { motion, Variants } from "framer-motion";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import axios from "axios";

interface ContactProps {
    data: {
        title: string;
        description: string;
        subtitle: string;
        values: string[];
        fields: string[];
    };
}

interface FormData {
    [key: string]: string;
}

interface InputField {
    type: "text" | "email" | "textarea";
    id: string;
    placeholder: string;
    label: string;
    name: string;
}

interface responseTypes {
    message: string;
    status: number;
}

const Contact: React.FC<ContactProps> = ({ data }) => {
    const { title, description, subtitle, values, fields } = data;
    const [formData, setFormData] = useState<FormData>({});
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [isBtnDisabled, setBtnDisabled] = useState(false);
    const [response, setResponse] = useState<responseTypes | null>(null);
    const [showAlert, setShowAlert] = useState(false);

    const inputFields: InputField[] = [
        { type: "text", id: values[0], placeholder: "John Doe", label: fields[0], name: "name" },
        { type: "email", id: values[1], placeholder: "name@example.com", label: fields[1], name: "email" },
        { type: "text", id: values[2], placeholder: "example.com/my-project", label: fields[2], name: "links" },
        { type: "textarea", id: values[3], placeholder: "Leave a message here...", label: fields[3], name: "message" },
    ];

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Sending message...");

        setBtnDisabled(true);

        if (!executeRecaptcha) {
            console.log("Recaptcha not loaded");
            return;
        }

        try {
            const token = await executeRecaptcha();
            if (!token) {
                setResponse({ message: "Failed to Send!", status: 400 });
                return;
            }

            const result = await axios.post("/api/form", {
                token,
                ...formData,
            });
            console.log("Got response...", result);

            if (result) {
                setResponse({
                    message: result.data.message,
                    status: result.status,
                });
                setShowAlert(true);
            }
            setBtnDisabled(false);
        } catch (error: any) {
            console.log(error);
            setResponse({ message: error.response.data.error, status: error.response.status });
            setShowAlert(true);
            setBtnDisabled(false);
        }
    };

    const anim1: Variants = {
        offscreen: {
            y: 20,
            opacity: 0,
        },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.1,
                duration: 1.5,
            },
        },
    };

    const anim2: Variants = {
        offscreen: {
            x: 100,
            opacity: 0,
        },
        onscreen: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.1,
                duration: 1.5,
            },
        },
    };

    return (
        <section id="contact" className="container-lg col-11 col-lg-10 col-xxxl-7 px-4 py-5 content">
            <div className="row py-5 mb-5 justify-content-between">
                <div className="col-lg-6 text-lg-start py-3 my-5 my-lg-1">
                    <motion.div
                        variants={anim1}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: false, amount: "some" }}
                    >
                        <h2 className="display-5 fw-bold lh-1 mb-5" dangerouslySetInnerHTML={{ __html: title }} />
                        <p className="col-lg-10 fs-4" dangerouslySetInnerHTML={{ __html: description }} />
                    </motion.div>
                </div>

                <div className="col-lg-5 col-md-12">
                    <motion.div
                        variants={anim2}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: false, amount: "some" }}
                    >
                        <form className="p-4 p-md-5 rounded-4 shadow-lg" onSubmit={handleSubmit}>
                            <h3 className="fw-bold lh-1 mb-3">{subtitle}</h3>

                            {showAlert && (
                                <motion.div
                                    initial={{ opacity: 0, y: -50 }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            type: "spring",
                                            bounce: 0.3,
                                            duration: 0.4,
                                        },
                                    }}
                                >
                                    {/* say variant success if response status is 200, and variant danger if response status is 400 */}

                                    <Alert
                                        onClose={() => setShowAlert(false)}
                                        dismissible
                                        variant={response?.status === 200 ? "success" : "danger"}
                                    >
                                        {/* if error, show error message, else show success message */}
                                        <Alert.Heading>
                                            {response?.status === 200 ? "Success!" : "Error!"}
                                        </Alert.Heading>
                                        <p>{response?.message}</p>
                                    </Alert>
                                </motion.div>
                            )}

                            {inputFields.map((field) => (
                                <div className="form-floating mb-3" key={field.id}>
                                    {field.type === "textarea" ? (
                                        <textarea
                                            className="form-control"
                                            id={field.id}
                                            name={field.name}
                                            placeholder={field.placeholder}
                                            onChange={handleInputChange}
                                        ></textarea>
                                    ) : (
                                        <input
                                            type={field.type}
                                            className="form-control"
                                            id={field.id}
                                            name={field.name}
                                            placeholder={field.placeholder}
                                            onChange={handleInputChange}
                                        />
                                    )}
                                    <label htmlFor={field.id}>{field.label}</label>
                                </div>
                            ))}

                            <Button
                                variant="primary"
                                size="lg"
                                type="submit"
                                className="w-100 mt-4 submitBtn"
                                style={{ border: "none" }}
                                disabled={isBtnDisabled}
                            >
                                Submit
                            </Button>
                            <p className="text-muted" style={{ fontSize: 10, marginTop: 5 }}>
                                This site is protected by reCAPTCHA and the Google
                                <a href="https://policies.google.com/privacy"> Privacy Policy</a> and
                                <a href="https://policies.google.com/terms"> Terms of Service</a> apply.
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
