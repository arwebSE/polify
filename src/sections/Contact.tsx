import React from "react";
import { Button } from "react-bootstrap";
import { motion, Variants } from "framer-motion";
interface ContactProps {
    data: {
        title: string;
        description: string;
        subtitle: string;
        values: string[];
        fields: string[];
    };
}

const Contact: React.FC<ContactProps> = ({ data }) => {
    const { title, description, subtitle, values, fields } = data;

    const renderInput = (type: string, id: string, placeholder: string, label: string) => (
        <div className="form-floating mb-3">
            <input type={type} className="form-control" id={id} placeholder={placeholder} />
            <label htmlFor={id}>{label}</label>
        </div>
    );

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

    const handleSubmit = async (e: any) => {
        // Stop the form from submitting and refreshing the page.
        e.preventDefault();

        // Get data from the form.
        const data = {
            first: e.target.name.value,
            last: e.target.email.value,
        };

        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data);

        // API endpoint where we send form data.
        const endpoint = "/api/form";

        // Form the request for sending data to the server.
        const options = {
            // The method is POST because we are sending data.
            method: "POST",
            // Tell the server we're sending JSON.
            headers: {
                "Content-Type": "application/json",
            },
            // Body of the request is the JSON data we created above.
            body: JSONdata,
        };

        // Send the form data to our forms API on Vercel and get a response.
        const response = await fetch(endpoint, options);

        // Get the response data from server as JSON.
        // If server returns the name submitted, that means the form works.
        const result = await response.json();
        alert(`Handling: ${result.data}`);
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

                            {renderInput("name", values[0], "John Doe", fields[0])}
                            {renderInput("email", values[1], "name@example.com", fields[1])}
                            {renderInput("text", values[2], "example.com/my-project", fields[2])}

                            <div className="form-floating mb-3">
                                <textarea
                                    /* type="text" */
                                    className="form-control"
                                    id={values[3]}
                                    placeholder="Leave a message here..."
                                    /* style="height: 100px" */
                                ></textarea>
                                <label htmlFor={values[3]}>{fields[3]}</label>
                            </div>

                            <Button
                                variant="primary"
                                size="lg"
                                type="submit"
                                className="w-100 mt-4"
                                style={{ border: "none" }}
                            >
                                Submit
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
