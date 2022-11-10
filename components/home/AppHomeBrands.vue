<template>
    <section class="brands">
        <div class="row m-0 align-items-center justify-content-center">
            <div class="col-12">
                <div class="heading">
                    <h2>Some Brands We Work With</h2>
                    <p>Quisque aliquet, libero consequat elementum convallis.</p>
                </div>
            </div>
            <div class="col-sm-3 col-md-2 brand">
                <img src="https://avada.theme-fusion.com/marketing-consultant/wp-content/uploads/sites/142/2020/06/abstract.png" alt="">
            </div>
            <div class="col-sm-3 col-md-2 brand">
                <img src="https://avada.theme-fusion.com/marketing-consultant/wp-content/uploads/sites/142/2020/06/cglobal.png" alt="">
            </div>
            <div class="col-sm-3 col-md-2 brand">
                <img src="https://avada.theme-fusion.com/marketing-consultant/wp-content/uploads/sites/142/2020/06/next.png" alt="">
            </div>
            <div class="col-sm-3 col-md-2 brand">
                <img src="https://avada.theme-fusion.com/marketing-consultant/wp-content/uploads/sites/142/2020/06/hemisferio.png" alt="">
            </div>
            <div class="col-sm-3 col-md-2 brand">
                <img src="https://avada.theme-fusion.com/marketing-consultant/wp-content/uploads/sites/142/2020/06/spaces.png" alt="">
            </div>
            <div class="col-sm-3 col-md-2 brand">
                <img src="https://avada.theme-fusion.com/marketing-consultant/wp-content/uploads/sites/142/2020/06/digitalbox.png" alt="">
            </div>
        </div>
    </section>
</template>

<script>

export default {
    name: 'AppHomeBrands',
    data() {
        return {

        }
    }
}
</script>
<style lang="scss">
    .brands {
        padding-bottom: 85.4px;
        padding-left: 32px;
        padding-right: 32px;
        padding-top: 24.4px
    }
    .brands .heading {
        margin: 10px 0 20px;
    }
    .brands .heading h2 {
        margin: 12px 0 16px;
        font-size: 54px;
        font-weight: 500;
        letter-spacing: -1.944px;
        line-height: 61.5667px;
        text-align: center;
    }

    .brands .heading p {
        font-size: 24px;
        font-weight: 400;
        letter-spacing: -0.24px;
        line-height: 35.5167px;
        margin-bottom: 20px;
        text-align: center;
    }

    @include xs {
        .brands .heading h2 {
            font-size: 34px;
            line-height: 40px;
        }

        .brands .heading p {
            font-size: 20px;
            line-height: 30px;
        }
    }

    .brands .brand {
        text-align: center;
        margin-bottom: 15px;
    }

    .brands .brand img {
        width: 148px;
        margin: 0 auto;
        cursor: pointer;
    }
</style>