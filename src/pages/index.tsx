import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { Inter } from "@next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import Button from "react-bootstrap/Button";
import { GraphQLClient, gql } from "graphql-request";
import BlogPost from "@/components/BlogPost";

/* import styles from "@/styles/Home.module.scss"; */

const inter = Inter({ subsets: ["latin"] });

const cms = new GraphQLClient(process.env.GQL_API || "");

const query = gql`
    query {
        posts {
            id
            title
            date
            slug
            coverImage {
                url
            }
            author {
                name
                picture {
                    url
                }
            }
            content {
                html
            }
        }
    }
`;

export async function getStaticProps() {
    const { posts } = await cms.request(query);

    return {
        props: { posts },
        revalidate: 10,
    };
}

export default function Home({ posts }: any) {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>Polify</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <meta property="og:title" content="Polify" />
                <meta property="og:description" content="Polify, Your Long Term Partner." />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="./favicon-32x32.png" />
                <meta name="msapplication-TileColor" content="#2d89ef" />
                <meta name="theme-color" content="#ffffff" />

                <link rel="apple-touch-icon" sizes="180x180" href="./apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="./favicon-16x16.png" />
                <link rel="manifest" href="./site.webmanifest" />
                <link rel="mask-icon" href="./safari-pinned-tab.svg" color="#5bbad5" />

                {/* <link rel="stylesheet" href="css/normalize.css" />
                <link rel="stylesheet" href="css/boilerplate.css" /> */}

                {/* <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
                /> */}

                {/* <link rel="stylesheet" href="css/main.min.css" /> */}
            </Head>
            <main data-bs-spy="scroll" data-bs-target="#navbar" data-bs-smooth-scroll="true">
                <div id="navbar" className="container py-5 mb-4">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <Link className="navbar-brand" href="/">
                                <Image src="/img/logo.svg" className="bi me-2" alt="logo" width={50} height={50} />
                            </Link>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navToggler"
                                aria-controls="navToggler"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navToggler">
                                <ul className="me-auto"></ul>
                                <ul className="navbar-nav nav-pills">
                                    <li className="nav-item">
                                        <a href="#benefits" className="nav-link">
                                            Benefits
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#concept" className="nav-link">
                                            Concept
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#services" className="nav-link">
                                            Services
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#team" className="nav-link">
                                            Team
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#contact" className="nav-link active">
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>

                <div id="partner" className="container col-xl-10 col-xxl-8 px-4 py-5">
                    <div className="row align-items-center g-lg-5 py-5">
                        <div className="col-lg-7 text-center text-lg-start">
                            <h1 className="display-1 fw-bold lh-1 mb-0">Your Long-Term</h1>
                            <h1 className="display-1 fw-bold lh-1 mb-3 tint">Partner</h1>
                            <p className="col-lg-10 fs-4">
                                All start-ups dream of continuing to exist in the market and dominate their areas and
                                Polify is there to support its partners in realizing <span>this dream.</span>
                            </p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                                <Button variant="primary" size="lg" className="px-4 me-md-4 fw-bold">
                                    Try a week
                                </Button>
                                <Button variant="outline" size="lg" className="px-4" href="#contact">
                                    Contact us
                                </Button>
                            </div>
                        </div>
                        <div className="col-md-10 mx-auto col-lg-5"></div>
                    </div>
                </div>

                <div id="empower" className="container px-5">
                    <div className="row p-5 pb-3 pe-lg-0 align-items-center rounded-5 border shadow mb-5">
                        <div className="col-lg-4 p-3 p-lg-4 pt-lg-3">
                            <h2 className="display-7 fw-bold lh-1">Polify empowers businesses worldwide.</h2>
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-2">
                            <h1 className="display-7 fw-bold">400+</h1>
                            <p className="lead">Connections within our web3 network.</p>
                        </div>
                        <div className="col-lg-2">
                            <h1 className="display-7 fw-bold">7,5+</h1>
                            <p className="lead">Combined years of experience in Web3.</p>
                        </div>
                        <div className="col-lg-2">
                            <h1 className="display-7 fw-bold">15+</h1>
                            <p className="lead">Project that have worked with Polify.</p>
                        </div>
                    </div>
                </div>

                <br />
                <br />

                <section id="proof" className="pb-5">
                    <div className="container col-xl-10 col-xxl-8 px-4 py-5">
                        <div className="row align-items-center g-lg-5 py-2">
                            <div className="col-lg-7 text-center text-lg-start">
                                <h3>Social Proof</h3>
                                <h1 className="display-5 fw-bold lh-1 mb-0">Projects Working With Us</h1>
                            </div>
                        </div>
                        <div className="row align-items-center g-lg-5">
                            <div className="col-lg-7 text-center text-lg-start p-5 pb-3 ps-lg-0">
                                <img
                                    src="./img/graph.jpg"
                                    alt="graph of community growth"
                                    className="graph shadow-lg rounded-5"
                                />
                            </div>
                            <div className="col-md-10 col-lg-4">
                                <p>
                                    These are the results we achieved by using the Polify concept with Community
                                    marketing, where we not only increased the number of players and community members
                                    but also succeeded in maintaining the activity.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="news" className="pb-5">
                    <div className="container col-xl-10 col-xxl-8 px-4 py-5">
                        <div className="row align-items-center g-lg-5 py-2">
                            <div className="col-lg-7 text-center text-lg-start">
                                <h3>News</h3>
                                <h1 className="display-5 fw-bold lh-1 mb-0">Whats New With Us</h1>
                            </div>
                        </div>

                        <div className="row mb-2">
                            {posts.map((post: { id: any; title: any; author: any; coverImage: any; datePublished: any; slug: any; content: any; }) => (
                                <BlogPost
                                    key={post.id}
                                    title={post.title}
                                    author={post.author}
                                    coverImage={post.coverImage}
                                    datePublished={post.datePublished}
                                    slug={post.slug}
                                    content={post.content}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                <section id="benefits">
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                    <div className="container col-xl-10 col-xxl-8 px-4 py-5">
                        <div className="row align-items-center g-lg-5 py-2">
                            <div className="col-lg-10 text-center text-lg-start">
                                <h3>Benefits</h3>
                                <h1 className="lh-1">Benefits From Working With Us</h1>
                            </div>
                        </div>
                        <div className="row align-items-center g-lg-5 py-2">
                            <div className="col-lg-6 text-center text-lg-start">
                                <p className="subtext">
                                    Polify’s effective marketing is based on strong, driven, and engaging communities
                                    that give the audience a stronger feeling of belief in the project and experience
                                    what you have to offer both short and long-term.
                                </p>
                            </div>
                        </div>
                        <div className="row align-items-center g-lg-5 py-2">
                            <div className="col-lg-6 text-center text-lg-start">
                                <ul className="subtext">
                                    <li>Cost-effective</li>
                                    <li>Always have someone to bounce ideas off</li>
                                    <li>A wide network of contacts.</li>
                                    <li>
                                        A team that is accustomed to working under pressure and is comfortable
                                        problem-solvers.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                    <div id="concept" className="container-xxl px-4 py-5">
                        <div className="row align-items-center py-5">
                            <div className="col-lg-8 text-center text-lg-start">
                                <h3>Concept</h3>
                                <h1 className="lh-1">How We Operate</h1>
                            </div>
                        </div>

                        <br />
                        <br />

                        <div className="row justify-content-md-center align-items-center py-2">
                            <div className="col-lg-3 text-lg-end pe-lg-0 order-lg-1">
                                <h4>Execute</h4>
                                <p className="subtext">
                                    The team will put their plan or strategy into action and carry out the tasks
                                    necessary to reach the set goals.
                                </p>
                            </div>

                            <div className="text-center align-items-center col-md-auto order-sm-first order-lg-2">
                                <img
                                    src="./img/concept.svg"
                                    alt="circle that represents the process"
                                    className="circle"
                                />
                            </div>

                            <div className="col-lg-3 text-lg-start ps-lg-0 order-lg-3">
                                <h4>Research</h4>
                                <p className="subtext">
                                    The first step in the process is to conduct research and gather information about
                                    the project.
                                </p>
                            </div>
                        </div>
                        <div className="row justify-content-md-center align-items-center py-2">
                            <div className="col-lg-3 text-lg-end pe-lg-0">
                                <h4>Strategy</h4>
                                <p className="subtext">
                                    The team will develop a plan or strategy that fits the needs and vision of the
                                    projects.
                                </p>
                            </div>

                            <div className="col-md-auto fakepic"></div>

                            <div className="col-lg-3 text-lg-start ps-lg-0">
                                <h4>Reaching Out</h4>
                                <p className="subtext">
                                    The team will reach out and communicate with relevant contacts.
                                </p>
                            </div>
                        </div>

                        <div className="row align-items-center pb-2 justify-content-md-center">
                            <div className="col-lg-4"></div>
                            <div className="col-lg-4 text-lg-center">
                                <h4>Feedback</h4>
                                <p className="subtext">
                                    The team will review and analyze feedback received from our contact network and the
                                    Polify team.
                                </p>
                            </div>
                            <div className="col-lg-4"></div>
                        </div>
                    </div>

                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </section>

                <div id="diag1"></div>
                <div id="diag2"></div>

                <section id="services">
                    <div className="wrapper">
                        <div className="px-4 pt-5 my-5 text-center">
                            <h3>Services</h3>
                            <h1 className="display-5 fw-bold">Our Services & Features.</h1>
                            <div className="col-lg-6 mx-auto">
                                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center"></div>
                            </div>
                        </div>

                        <div className="container-xxl px-4 py-5">
                            <div className="row">
                                <div className="col-lg-4 p-4 py-lg-0">
                                    <div className="card card-cover overflow-hidden rounded-4 align-items-center text-center">
                                        <div className="row">
                                            <div className="h-100 pt-5">
                                                <img src="./img/marketing.svg" alt="image" width="100" height="100" />
                                            </div>
                                        </div>
                                        <div className="pt-3">
                                            <h2 className="lh-1">Marketing</h2>
                                        </div>
                                        <div className="flex-column p-5 pt-2">
                                            <p className="lh-1">
                                                Polify believes in marketing that aligns with the values and vision of
                                                each project, our work is based on bringing you closer to your ideal
                                                customers.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 p-4 py-lg-0">
                                    <div className="card card-cover overflow-hidden rounded-4 align-items-center text-center">
                                        <div className="row">
                                            <div className="h-100 pt-5">
                                                <img src="./img/community.svg" alt="image" width="100" height="100" />
                                            </div>
                                        </div>
                                        <div className="pt-3">
                                            <h2>Community Management</h2>
                                        </div>
                                        <div className="flex-column p-5 pt-2">
                                            <p className="lh-1">
                                                We believe in using community management as a more efficient and
                                                cost-effective way to drive business growth
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 p-4 py-lg-0">
                                    <div className="card card-cover overflow-hidden rounded-4 align-items-center text-center">
                                        <div className="row">
                                            <div className="h-100 pt-5">
                                                <img src="./img/advising.svg" alt="image" width="100" height="100" />
                                            </div>
                                        </div>
                                        <div className="pt-3">
                                            <h2 className="lh-1">Advising</h2>
                                        </div>
                                        <div className="flex-column p-5 pt-2">
                                            <p className="lh-1">
                                                When developing a successful project, it&apos;s important to have a team
                                                of experts who can provide valuable input and insights, but also embody
                                                a critical perspective that helps you always stay ahead.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container col-xl-10 col-xxl-8 px-4 py-5 try my-5">
                            <div className="row align-items-center g-lg-5 py-5">
                                <div className="col-lg-8">
                                    <h3>Special Offer</h3>
                                    <h1 className="display-1 fw-bold lh-1 mb-4">Try For A Week</h1>
                                    <p className="col-lg-10 fs-4 lh-2">
                                        We understand that it can be complicated to find the fitting agency or help for
                                        your project, that&apos;s why Polify offers our clients a chance to
                                        <span>try our concept for a week!</span> <br />
                                        <br />
                                        The offer includes several meetings and a befitting plan for the needs we have
                                        identified together and solutions that your team are satisfied with. We will
                                        leave it to you to implement our strategic plan.
                                        <br />
                                        <br />
                                        We are confident that Polify will always deliver on your expectations, that is
                                        why we guarantee <span>half your money back</span> if you are not satisfied.
                                    </p>
                                    <div className="d-md-flex mt-4">
                                        <button
                                            type="button"
                                            className="btn btn-light btn-lg px-4 py-3 me-md-4 fw-bold"
                                        >
                                            Try Now!
                                        </button>
                                    </div>
                                </div>
                                <div className="col-md-10 mx-auto col-lg-4"></div>
                            </div>
                        </div>
                    </div>
                </section>

                <div id="diag3"></div>

                <section id="team">
                    <div className="px-4 pb-5 mb-5 text-center">
                        <div className="pb-5">
                            <h3>Team</h3>
                            <h1 className="display-4 fw-bold mb-5">Meet Our Core Team</h1>
                        </div>
                        <div className="container-xxl px-4 py-5 mt-5">
                            <div className="row">
                                <div className="col-lg-4 p-2 p-xl-4 py-lg-0 my-5 my-lg-1">
                                    <div className="card card-cover rounded-4 align-items-center text-center">
                                        <div className="h-100 pt-5">
                                            <img
                                                src="./img/adam.png"
                                                alt="image"
                                                width="140"
                                                height="140"
                                                className="profile"
                                            />
                                        </div>
                                        <div className="pt-3">
                                            <h2 className="lh-1 text-white">Adam Razzak</h2>
                                        </div>
                                        <div className="pt-1">
                                            <h4 className="lh-1 text-white">CEO</h4>
                                        </div>
                                        <div className="px-4 pt-0">
                                            <p className="lh-2">
                                                Works with Polify&apos;s Web3 marketing/advising, community management
                                                and Web3 network.
                                            </p>
                                        </div>
                                        <div className="pb-4">
                                            <a href="#">
                                                <img src="./img/linkedin.svg" alt="linkedin logo" width="30px" />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 p-2 p-xl-4 py-lg-0 my-5 my-lg-1">
                                    <div className="card card-cover rounded-4 align-items-center text-center">
                                        <div className="h-100 pt-5">
                                            <img
                                                src="./img/ludvig.png"
                                                alt="image"
                                                width="140"
                                                height="140"
                                                className="profile"
                                            />
                                        </div>
                                        <div className="pt-3">
                                            <h2 className="lh-1 text-white">Ludvig Möller</h2>
                                        </div>
                                        <div className="pt-1">
                                            <h4 className="lh-1 text-white">CTO</h4>
                                        </div>
                                        <div className="px-4 pt-0">
                                            <p className="lh-2">
                                                Works with Polify&apos;s community management, <br />
                                                NFT marketing/advising and design.
                                            </p>
                                        </div>
                                        <div className="pb-4">
                                            <a href="#">
                                                <img src="./img/linkedin.svg" alt="linkedin logo" width="30px" />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 p-2 p-xl-4 py-lg-0 my-5 my-lg-1">
                                    <div className="card card-cover rounded-4 align-items-center text-center">
                                        <div className="h-100 pt-5">
                                            <img
                                                src="./img/dayem.png"
                                                alt="image"
                                                width="140"
                                                height="140"
                                                className="profile"
                                            />
                                        </div>
                                        <div className="pt-3">
                                            <h2 className="lh-1 text-white">Dayem Qazi</h2>
                                        </div>
                                        <div className="pt-1">
                                            <h4 className="lh-1 text-white">CMO</h4>
                                        </div>
                                        <div className="px-4 pt-0">
                                            <p className="lh-2">
                                                Works with Polify&apos;s social media advising/ marketing, influencer
                                                management and copywriting.
                                            </p>
                                        </div>
                                        <div className="pb-4">
                                            <a href="#">
                                                <img src="./img/linkedin.svg" alt="linkedin logo" width="30px" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <br />
                <br />
                <br />
                <br />

                <section id="bottom">
                    <div className="bgWrapper"></div>

                    <div id="contact" className="container-lg col-11 col-lg-10 col-xxxl-7 px-4 py-5 content">
                        <div className="row py-5 mb-5 justify-content-between">
                            <div className="col-lg-6 text-lg-start py-3 my-5 my-lg-1">
                                <h2 className="display-5 fw-bold lh-1 mb-5">
                                    Ready To Take The <br />
                                    Next Step?
                                </h2>
                                <p className="col-lg-10 fs-4">
                                    We believe that we have found the most effective concept, through Polify you will
                                    receive marketing that not only is cost efficient but also gives you a more stable
                                    presence in the market with more loyal customers. <br />
                                    <br />
                                    Do not hesitate to reach out to us, we have solutions for projects of all sizes.
                                    Take advantage of our new offer and give the Polify concept a try.
                                </p>
                            </div>

                            <div className="col-lg-5 col-md-12">
                                <form className="p-4 p-md-5 rounded-4 shadow-lg">
                                    <h3 className="fw-bold lh-1 mb-3">Tell Us About Yourself.</h3>

                                    <div className="form-floating mb-3">
                                        <input
                                            type="name"
                                            className="form-control"
                                            id="fullname"
                                            placeholder="John Doe"
                                        />
                                        <label htmlFor="fullname">Your Name*</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="name@example.com"
                                        />
                                        <label htmlFor="email">Email*</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="projects"
                                            placeholder="example.com/my-project"
                                        />
                                        <label htmlFor="projects">Your Project Links*</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <textarea
                                            /* type="text" */
                                            className="form-control"
                                            id="message"
                                            placeholder="Leave a message here..."
                                            /* style="height: 100px" */
                                        ></textarea>
                                        <label htmlFor="message">Your Message</label>
                                    </div>

                                    <button className="w-100 btn btn-lg btn-primary text-white mt-4" type="submit">
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <footer>
                        <div className="container content col-xl-10 col-xxl-7">
                            <div className="pt-4 mt-4 mb-5">
                                <div className="d-flex flex-row justify-content-between align-items-center">
                                    <div className="d-flex align-items-center">
                                        {/*  <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                                            <div className="d-flex flex-column">
                                                <img src="./img/polify.svg" alt="polify logo" width="170px" />
                                                <span className="slogan">Your Long Term Partner</span>
                                            </div>
                                        </a> */}
                                    </div>

                                    <div className="text-center">
                                        <div className="row p-2">
                                            <h4>Follow Us</h4>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <a className="social" href="#">
                                                    <FontAwesomeIcon icon={faLinkedin} size="2xl" />
                                                </a>
                                            </div>
                                            <div className="col">
                                                <a className="social" href="#">
                                                    <FontAwesomeIcon icon={faEnvelope} size="2xl" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex flex-row">
                                    <span className="mt-4 copyright">
                                        © POLIFY 2023. <a href="#">Terms & Privacy</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </footer>
                    <div className="borderWrapper container col-xl-10 col-xxl-7 px-3">
                        <div></div>
                    </div>
                    <div className="waves">
                        <img alt="waves" src="img/waves.svg" />
                    </div>
                </section>

                {/*   <div className={styles.description}>
                    <p>
                        Get started by editing&nbsp;
                        <code className={styles.code}>src/pages/index.tsx</code>
                    </p>
                    <div>
                        <a
                            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            By{" "}
                            <Image
                                src="/vercel.svg"
                                alt="Vercel Logo"
                                className={styles.vercelLogo}
                                width={100}
                                height={24}
                                priority
                            />
                        </a>
                    </div>
                </div> */}
            </main>
        </>
    );
}
