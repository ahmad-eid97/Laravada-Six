<template>
    <section class="bost">
        <div class="row m-0 justify-content-between align-items-center">
            <div class="col-lg-6">
                <div class="text" data-aos="fade-right" data-aos-easing="ease-in-out-quart" data-aos-duration="1000">
                    <h2>
                        We Boost Our Clients’ Bottom Line by Optimizing Their Growth Potential.
                    </h2>
                    <p>
                        Quisque aliquet, libero consequat elementum convallis, erat risus imperdiet pellentesque sem neque eget.
                    </p>
                    <a href="#" class="btn">Get A Consultant</a>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="image" data-aos="fade-left" data-aos-easing="ease-in-out-quart" data-aos-duration="1000">
                    <img class="img-fluid" src="https://avada.theme-fusion.com/marketing-consultant/wp-content/uploads/sites/142/2020/07/we-boost-our-clients.jpg" alt="">
                </div>
            </div>
        </div>
        <div class="row features justify-content-between align-items-center">
            <div class="col-lg-6">
                <div class="text" data-aos="fade-up" data-aos-easing="ease-in-out-quart" data-aos-duration="1000">
                    <h3>We Build Relationships</h3>
                    <p>Curabitur ac leo nunc. Vestibulum et mauris vel ante finibus maximus nec ut leo. Integer consectetur.</p>
                </div>
                <div class="text" data-aos="fade-up" data-aos-easing="ease-in-out-quart" data-aos-duration="1000">
                    <h3>Proprietary Processes</h3>
                    <p>Curabitur ac leo nunc. Vestibulum et mauris vel ante finibus maximus nec ut leo. Integer consectetur.</p>
                </div>
            </div>
            <div class="col-auto">
                <div class="item" data-aos="fade-up" data-aos-easing="ease-in-out-quart" data-aos-duration="1000">
                    <font-awesome-icon icon="fa-solid fa-rectangle-list" style="font-size: 28px;padding: 26px 22px;"/>
                    <div class="item-text">
                        <h4>Accountability</h4>
                        <p>Curabitur ac leo nunc vestibulum</p>
                    </div>
                </div>
                <div class="item" data-aos="fade-up" data-aos-easing="ease-in-out-quart" data-aos-duration="1000">
                    <font-awesome-icon icon="fa-solid fa-square-plus" />
                    <div class="item-text">
                        <h4>Transparency</h4>
                        <p>Curabitur ac leo nunc vestibulum</p>
                    </div>
                </div>
                <div class="item" data-aos="fade-up" data-aos-easing="ease-in-out-quart" data-aos-duration="1000">
                    <font-awesome-icon icon="fa-solid fa-square-poll-vertical" />
                    <div class="item-text">
                        <h4>Investment</h4>
                        <p>Curabitur ac leo nunc vestibulum</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row awards justify-content-between align-items-center">
            <div class="col-12">
                <h3>Awards</h3>
            </div>
            <div class="col-sm-6 col-lg-3">
                <div class="award" data-aos="fade-up" data-aos-easing="ease-in-out-quart" data-aos-duration="1000">
                    <div class="image">
                        <img src="https://avada.theme-fusion.com/marketing-consultant/wp-content/uploads/sites/142/2020/07/award-a-200x191.png" alt="">
                    </div>
                    <p>Winner Seo Master MAGT Smart Start Award 2017</p>
                </div>
            </div>
            <div class="col-sm-6 col-lg-3">
                <div class="award" data-aos="fade-up" data-aos-easing="ease-in-out-quart" data-aos-duration="1000">
                    <div class="image">
                        <img src="https://avada.theme-fusion.com/marketing-consultant/wp-content/uploads/sites/142/2020/07/award-b-200x191.png" alt="">
                    </div>
                    <p>Top Social Media Agencies Next Partner 2018</p>
                </div>
            </div>
            <div class="col-sm-6 col-lg-3">
                <div class="award" data-aos="fade-up" data-aos-easing="ease-in-out-quart" data-aos-duration="1000">
                    <div class="image">
                        <img src="https://avada.theme-fusion.com/marketing-consultant/wp-content/uploads/sites/142/2020/07/award-c-200x191.png" alt="">
                    </div>
                    <p>10 Fastest Growing Abstract Solution Providers 2019</p>
                </div>
            </div>
            <div class="col-sm-6 col-lg-3">
                <div class="award" data-aos="fade-up" data-aos-easing="ease-in-out-quart" data-aos-duration="1000">
                    <div class="image">
                        <img src="https://avada.theme-fusion.com/marketing-consultant/wp-content/uploads/sites/142/2020/07/award-d-200x191.png" alt="">
                    </div>
                    <p>National Excellence Agencie Award Winner 2020</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    name: 'AppHomeBost',
    data() {
        return {

        }
    }
}
</script>
<style lang="scss">
    .bost {
        background-image: linear-gradient(216deg, rgb(244, 244, 246) 0%, rgb(255, 255, 255) 100%);
        padding-bottom: 48.8px;
        padding-left: 32px;
        padding-right: 32px;
        padding-top: 73.2px;
        position: relative;
    }
    .bost .text {
        margin-bottom: 20px;
        margin-top: 20px;
        /* margin-left: 84.9833px;
        margin-right: 84.9833px; */
    }
    .bost .text h2{
        font-size: 54px;
        font-weight: 500;
        letter-spacing: -1.944px;
        line-height: 61.5667px;
    }
    .bost .text p{
        font-size: 24px;
        font-weight: 400;
        letter-spacing: -0.24px;
        line-height: 35.5167px;
        margin-bottom: 20px;
    }

    @include sm {
        .bost .text h2{
            font-size: 40px;
            line-height: 55px;
        }
        .bost .text p{
            font-size: 20px;
            line-height: 28px;
        }
    }

    @include xs {
        .bost .text h2{
            font-size: 34px;
            line-height: 50px;
        }
        .bost .text p{
            font-size: 18px;
            line-height: 25px;
        }
    }

    .bost .btn {
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
    .bost .btn:hover {
        background-color: rgb(153, 63, 15);
        border: 1px solid rgb(153, 63, 15);
        color: #fff;
    }
    .bost .image img {
        border-radius: 8px;
    }

    .bost .features {
        margin-top: 80px;
    }
    .bost .features .text{
        margin-left: 84.9833px;
        margin-right: 84.9833px;
        margin-bottom: 40px
    }

    @include md {
        .bost .features .text{
            margin-left: 0;
            margin-right: 0;
        }
    }

    .bost .features .text h3{
        margin-bottom: 16px;
        margin-top: 6px;
        font-size: 32px;
        font-weight: 500;
        letter-spacing: -0.96px;
        line-height: 40.3167px
    }
    .bost .features .text p{
        font-size: 20px;
        font-weight: 400;
        line-height: 32px;
        margin-bottom: 20px;
    }
    .bost .item {
        display: flex;
        margin-bottom: 10px
    }
    .bost .item svg{
        border: 2px solid rgb(248, 96, 17);
        border-radius: 20px;
        font-size: 36px;
        padding: 22px;
        color: rgb(248, 96, 17);
        margin-right: 20px;
    }
    .bost .item .item-text h4{
        font-size: 24px;
        font-weight: 500;
        letter-spacing: -0.384px;
        line-height: 33.6px;
        margin-bottom: 15px;
    }
    .bost .item .item-text p{
        font-size: 20px;
        font-weight: 400;
        line-height: 32px;
        margin-bottom: 20px;
    }
    .bost .awards h3{
        margin: 12px 0px 24px;
        font-size: 32px;
        font-weight: 500;
        letter-spacing: -0.96px;
        line-height: 40.3167px;
        text-align: center;
    }
    .bost .awards .award .image{
        text-align: center;
        filter: hue-rotate(172deg) saturate(106%);
        transition: filter 0.3s ease;
    }
    .bost .awards .award .image:hover{
        filter: hue-rotate(0deg) saturate(100%);
    }
    .bost .awards .award .image img{
        max-width: 150px;
    }
    .bost .awards .award p{
        font-size: 20px;
        font-weight: 400;
        line-height: 32px;
        margin-bottom: 20px;
        text-align: center;
    }
</style>