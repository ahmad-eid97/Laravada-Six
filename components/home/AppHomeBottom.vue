<template>
    <section class="bottom">
        <div class="row m-0 align-items-center">
            <div class="col-lg-7">
                <h1>Let’s Make Things Happen</h1>
                <p>
                    Curabitur ac leo nunc. Vestibulum et mauris vel ante finibus maximus nec ut leo. Integer consectetur.
                </p>
                <div class="sperator">

                </div>
                <p class="qoute">
                    “The team at Avada Marketing Consultant is fabulous. They helped us unlock our potential online and offline. We have experienced year on year growth due to their progressive approach.”
                </p>
                <p class="name">
                    George Anderson
                </p>
                <p class="title">
                    Digitalbox CEO
                </p>
            </div>
            <div class="col-lg-5">
                <div class="form text-center">
                    <span>
                        <img src="https://avada.theme-fusion.com/marketing-consultant/wp-content/uploads/sites/142/2020/07/marketing-consultant-expert.jpg" alt="">
                    </span>
                    <h2>Richard Madsen</h2>
                    <h3>Marketing Consultant Expert</h3>
                    <a href="#" class="phone">
                        <font-awesome-icon icon="fa-solid fa-phone" />
                        (555) 802-1234
                    </a>
                    <b-form-input placeholder="Your Name*"></b-form-input>
                    <b-form-input placeholder="Your Email*"></b-form-input>
                    <b-form-input placeholder="Your Phone Number*"></b-form-input>
                    <a href="#" class="btn">Get A Callback</a>
                    <small>By submitting my data I agree to be contacted</small>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import "animate.css/animate.min.css";
export default {
    name: 'AppHomeBottom',
    data() {
        return {

        }
    }
}
</script>
<style lang="scss">
    .bottom {
        background-color: rgb(0, 0, 0);
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        padding: 80px 32px 80px;
        background-attachment: fixed;
    }
    .bottom h1 {
        font-weight: 500;
        margin: 0;
        font-size: 72px;
        letter-spacing: 2px;
        color: #fff;
        line-height: 80px;
        text-align: start;
        margin: 12px 0 24px;
    }

    @include xs {
        .bottom h1 {
            font-size: 42px;
            line-height: 80px;
        }
    }

    .bottom p {
        text-align: start;
        font-size: 30px;
        line-height: 42px;
        letter-spacing: -0.6px;
        color: #fff;
        font-weight: 400;
        margin-bottom: 20px;
    }

    @include xs {
        .bottom p {
            font-size: 25px;
            line-height: 42px;
        }
    }

    .bottom .btn {
        border-radius: 10px;
        border: 2px solid #000;
        padding: 17px 40px;
        background: #fff;
        font-size: 18px;
        font-weight: 500;
        line-height: 21px;
        letter-spacing: -0.18px;
        margin-top: 16px;
    }
    .bottom .btn svg {
        margin-left: 12px;
    }
    .bottom .btn:hover {
        color: #fff;
        background-color: transparent;
        border-color: #fff;
    }
    .bottom .form {
        width: 438px;
        max-width: 100%;
        padding: 24px;
        border-radius: 12px;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 24px 32px -6px;
        background: #fff;
    }
    .bottom .form img {
        height: 80px;
        width: 80px;
        border-radius: 50%;
    }
    .bottom .form h2 {
        font-size: 26px;
        font-weight: 500;
        letter-spacing: -0.416px;
        line-height: 36.4px;
        margin: 12px 0 4px;
    }
    .bottom .form h3 {
        font-size: 19px;
        font-weight: 400;
        line-height: 26.4px;
        margin: 12px 0 4px;
        color: rgb(119, 119, 119);
    }
    .bottom .form .phone {
        text-decoration: none;
        color: rgb(248, 96, 17);
        font-size: 18px;
        font-weight: 500;
        letter-spacing: -0.18px;
        line-height: 21px;
        margin: 0 0 10px;
        padding: 17px 40px;
        display: inline-block;
    }
    .bottom .form svg {
        margin-right: 12px;
    }
    .bottom .form input {
        margin: 8px 0;
        padding: 0 18px;
        color: rgb(94, 94, 94);
        font-size: 18px;
        font-weight: 400;
        height: 60px;
        border-radius: 10px;
        border: 1px solid rgb(219, 219, 219);
        color: rgb(94, 94, 94);
    }
    .bottom .form input::placeholder {
        color: #a7a7a7;
    }
    .bottom .form input:focus {
        border: 1px solid rgb(248, 96, 17);
        box-shadow: none;
    }
    .bottom .form .btn {
        padding: 17px 40px;
        background-color: rgb(248, 96, 17);
        display: block;
        margin: 8px 0;
        font-size: 18px;
        font-weight: 500;
        letter-spacing: -0.18px;
        line-height: 21px;
        text-transform: capitalize;
        border-radius: 10px;
        border: 1px solid rgb(248, 96, 17);
        color: #fff;
    }
    .bottom .form .btn:hover {
        background-color: rgb(153, 63, 15);
        border: 1px solid rgb(153, 63, 15);
    }
    .bottom .form small {
        color: rgb(119, 119, 119);
        font-size: 13px;
        font-weight: 400;
        line-height: 24px;
    }
    .sperator {
        margin-top: 16px;
        margin-bottom: 40px;
        border: 1px solid rgba(255, 255, 255, 0.3);
        width: 100px;
    }
    p.qoute {
        font-size: 22px;
        font-style: italic;
        letter-spacing: -0.22px;
        line-height: 32.5667px;
        margin-bottom: 20px;
    }
    p.name {
        font-size: 20px;
        margin: 6px 0 4px;
        font-weight: 400;
        line-height: 32px;
    }
    p.title {
        font-size: 14px;
        margin: 0 0 20px;
        font-weight: 400;
        line-height: 24px;
    }
</style>