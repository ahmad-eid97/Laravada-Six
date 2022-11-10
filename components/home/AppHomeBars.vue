<template>
    <section class="bar">
        <div class="row m-0 align-items-center">
            <div class="col-12">
                <div class="content d-flex align-items-center justify-content-between">
                    <div class="name d-flex align-items-center">
                        <div class="image d-inline-block">
                            <img src="https://avada.theme-fusion.com/marketing-consultant/wp-content/uploads/sites/142/2020/06/marketing-expert-cta.png" alt="">
                        </div>
                        <div class="text  d-inline-block">
                            <h5>Sandy Reiff</h5>
                            <p>Marketing Consultant Expert</p>
                        </div>
                    </div>
                    <div class="title">
                        <h4>Drive Leads and Sales with Avada</h4>
                    </div>
                    <a href="#" class="btn">
                        Free Qoute
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    name: 'AppHomeBars',
    data() {
        return {

        }
    }
}
</script>
<style lang="scss">
    .bar {
        padding-left: 32px;
        padding-right: 32px;
    }
    .bar .content {
        margin:  10px 0;
        background-color: rgb(255, 255, 255);
        border-radius: 12px;
        box-shadow: rgba(0, 0, 0, 0.06) 0px 20px 30px 0px;
        padding: 10px;
    }
    .bar .content img {
        margin-left: 36.35px;
        height: 62px;
        border-radius: 50%;
    }
    .bar .content .name {
        margin-left: 22px;
        
    }
    .bar .content .name .text {
        margin-left: 21px;
    }

    @include sm {
        .bar .content  {
            display: block !important;
            margin-bottom: 20px;
        }
        .bar .content img {
            margin-left: 0;
        }
    }

    .bar .content .name h5 {
        font-size: 20px;
        font-weight: 500;
        line-height: 30px;
        margin: 10px 0 0;
    }
    .bar .content .name p {
        font-size: 14px;
        font-weight: 400;
        line-height: 24px;
        margin-bottom: 10px;
    }
    .bar .content .title {
        margin-left: 31.5px;
        margin-right: 24.2333px;
        font-size: 26px;
        font-weight: 500;
        letter-spacing: -0.416px;
        line-height: 36.4px;
    }
    .bar .btn {
        padding: 17px 40px;
        margin: 20px;
        color: rgb(248, 96, 17);
        background-color: #ffefe6;
        font-size: 18px;
        font-weight: 500;
        border-radius: 0;
        letter-spacing: -0.18px;
        line-height: 21px;
        border: none;
        border-radius: 10px;
    }
    .bar .btn:hover {
        color: #fff;
        background-color: rgb(248, 96, 17);
    }
</style>