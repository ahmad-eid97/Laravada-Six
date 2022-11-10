<template>
    <section class="Organisations">
        <div class="row m-0 align-items-center">
            <div class="col-12">
                <div class="heading">
                    <h2>Trusted by Leading Organisations</h2>
                </div>
            </div>
        </div>
        <div class="row m-0 justify-content-center">
            <div class="col-sm-6 col-lg-4">
                <div class="image">
                    <img class="img-fluid" src="https://avada.theme-fusion.com/marketing-consultant/wp-content/uploads/sites/142/2020/06/case-studies-1.jpg" alt="">
                    <div class="rollover">
                        <div class="rollover-content">
                            <a class="" href="#"></a>
                        </div>
                    </div>
                </div>
                <div class="content">
                    <h2>How Spaces attracted five million visitors by improving the content</h2>
                    <div class="seprator">
                    </div>
                    <h3>
                        200%
                    </h3>
                    <p>Higher revenue from digital</p>
                </div>
            </div>
            <div class="col-sm-6 col-lg-4">
                <div class="image">
                    <img class="img-fluid" src="https://avada.theme-fusion.com/marketing-consultant/wp-content/uploads/sites/142/2020/06/case-studies-4.jpg" alt="">
                    <div class="rollover">
                        <div class="rollover-content">
                            <a class="" href="#"></a>
                        </div>
                    </div>
                </div>
                <div class="content">
                    <h2>Creativity helped Hemisferio to increase their brand reach vertically</h2>
                    <div class="seprator">
                    </div>
                    <h3>
                        10x
                    </h3>
                    <p>Sales increase with the same ad spend</p>
                </div>
            </div>
            <div class="col-sm-6 col-lg-4">
                <div class="image">
                    <img class="img-fluid" src="https://avada.theme-fusion.com/marketing-consultant/wp-content/uploads/sites/142/2020/06/case-studies-6.jpg" alt="">
                    <div class="rollover">
                        <div class="rollover-content">
                            <a class="" href="#"></a>
                        </div>
                    </div>
                </div>
                <div class="content">
                    <h2>How DigitalBox used AI-powered data insight to boost sales</h2>
                    <div class="seprator">
                    </div>
                    <h3>
                        3-year
                    </h3>
                    <p>Partnership with Avada Consultant</p>
                </div>
            </div>
            <div class="col-auto" data-aos="zoom-in-up" data-aos-easing="ease-in-out-quart" data-aos-duration="1000">
                <a href="#" class="btn">Read More Case Studies</a>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    name: 'AppHomeOrganisations',
    data() {
        return {

        }
    }
}
</script>
<style lang="scss">
    .Organisations {
        padding-bottom: 73.2px;
        padding-left: 32px;
        padding-right: 32px;
        padding-top: 73.2px
    }
    .Organisations .heading {
        margin: 10px 0 20px;
    }
    .Organisations .heading h2 {
        margin: 12px 0 16px;
        font-size: 54px;
        font-weight: 500;
        letter-spacing: -1.944px;
        line-height: 61.5667px;
        text-align: center;
    }

    @include md {
        .Organisations .heading h2 {
            font-size: 30px;
            line-height: 40px;
        }
    }

    .Organisations .image {
        position: relative;
    }
    .Organisations .image .rollover {
        background-image: linear-gradient(to top, rgba(248, 98, 18, 0.6) 0px, rgba(248, 96, 17, 0) 100%);
        transform: translateY(0);
        transition: opacity .5s ease-in-out;
        opacity: 0;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
    .Organisations .image:hover .rollover {
        opacity: 1;
        transform: translateX(0);
    }
    .Organisations .content {
        padding: 26px 0;
    }
    .Organisations .content h2 {
        font-size: 32px;
        font-weight: 500;
        letter-spacing: -0.768px;
        line-height: 41.6px;
        transition: color 0.2s linear;
        cursor: pointer;
    }
    .Organisations .content h2:hover {
        color: rgb(248, 96, 17);
    }
    .Organisations .seprator {
        display: block;
        margin: 20px 0;
        border: 1px dashed rgba(0, 0, 0, 0.08);
    }
    .Organisations .content h3 {
        font-size: 54px;
        font-weight: 700;
        letter-spacing: -1.62px;
        line-height: 61.5667px;
    }
    .Organisations .content p {
        font-size: 20px;
        font-weight: 400;
        line-height: 32px;
    }

    @include md {
        .Organisations .content h2 {
            font-size: 25px;
            line-height: 40px;
        }
        .Organisations .content h3 {
            font-size: 40px;
            line-height: 61.5667px;
        }
        .Organisations .content p {
            font-size: 18px;
            line-height: 32px;
        }
    }

    .Organisations .btn {
        padding: 17px 40px;
        background-color: rgb(248, 96, 17);
        display: inline-block;
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
    .Organisations .btn:hover {
        background-color: rgb(153, 63, 15);
        border: 1px solid rgb(153, 63, 15);
        color: #fff;
    }
</style>