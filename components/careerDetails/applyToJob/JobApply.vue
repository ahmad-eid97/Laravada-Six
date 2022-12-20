<template>
  <div class="applyToJob">
    <h4>Intrested in this job?</h4>
    <div class="field">
      <label for="name">Name</label>
      <input
        type="text"
        id="name"
        placeholder="Name"
        v-model="name"
        :class="emptyError && !name ? 'errorInput' : ''"
      />
      <span v-if="emptyError && !name" class="errorHint"
        >Field is required</span
      >
    </div>
    <div class="field">
      <label for="Your Email">Your Email</label>
      <input
        type="email"
        :class="(emptyError && !email) || !validEmail ? 'errorInput' : ''"
        id="Your Email"
        placeholder="Email"
        v-model="email"
        @change="typingEmail"
      />
      <span v-if="emptyError && !email" class="errorHint"
        >Field is required</span
      >
      <span v-if="!validEmail && email" class="errorHint"
        >Email is invalid</span
      >
    </div>
    <div class="field">
      <label for="phone">Phone Number</label>
      <input
        type="text"
        id="phone"
        placeholder="Phone Number"
        v-model="phone"
        :class="emptyError && !phone ? 'errorInput' : ''"
      />
      <span v-if="emptyError && !phone" class="errorHint"
        >Field is required</span
      >
    </div>
    <div class="attach">
      <input type="file" ref="fileInput" @change="chooseFile" />
      <div
        class="fileName"
        :class="$i18n.locale === 'ar' ? 'arabic' : ''"
        v-if="file"
      >
        <span>{{ file.name }}</span>
        <i class="fa-solid fa-xmark" @click="removeFile"></i>
      </div>
      <button @click="clickFile">Choose File</button>
    </div>
    <div class="policy">
      <input type="checkbox" id="policy" />
      <label for="policy">I agree to pirvacy policy</label>
    </div>
    <button @click="applyForJob">Apply For This Job</button>
  </div>
</template>

<script>
import * as EmailValidator from "email-validator";

export default {
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      file: null,
      fileUrl: "",
      validEmail: true,
      emptyError: false,
    };
  },
  methods: {
    clickFile() {
      this.$refs.fileInput.click();
    },
    chooseFile(e) {
      this.file = e.target.files[0];
    },
    removeFile() {
      this.file = null;
      this.$refs.fileInput.value = null;
    },
    typingEmail() {
      if (EmailValidator.validate(this.email)) {
        this.validEmail = true;
      }
    },
    async applyForJob() {
      const data = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        file: this.fileUrl,
        job_id: this.$route.params.id,
      };

      if (!this.$cookies.get("cms-auth")) {
        return this.$toast.error(
          "Please login or register to apply for the job"
        );
      }

      if (!this.email || !this.phone || !this.name) {
        this.emptyError = true;
        return this.$toast.error("Please fill all fields!");
      }

      if (!EmailValidator.validate(this.email)) {
        this.validEmail = false;
        return this.$toast.error("Email is invalid!");
      }

      if (!this.file) {
        return this.$toast.error("Please attach a file!");
      }

      let filesData = new FormData();
      filesData.append("upload", this.file);

      const response = await this.$axios.post(
        "/laravel-filemanager/upload",
        filesData,
        {
          headers: {
            AUTHORIZATION: `Bearer ${this.$cookies.get("cms-auth")}`,
          },
        }
      );

      if (response.data.error) {
        return this.$toast.error(response.data.error.message);
      }

      this.fileUrl = response.data.url;

      const applyResponse = await this.$axios.post("/jobs/apply", data, {
        headers: {
          AUTHORIZATION: `Bearer ${this.$cookies.get("cms-auth")}`,
        },
      });

      if (applyResponse.data.success) {
        return this.$toast.success("job application sent successfully");
      }

      this.name = "";
      this.email = "";
      this.phone = "";
      this.fileUrl = "";
      this.file = null;
    },
  },
};
</script>

<style scoped lang="scss">
.applyToJob {
  margin-top: 100px;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  position: sticky;
  top: 40px;
  .field {
    label {
      display: block;
      margin-top: 10px;
    }
    input {
      width: 100%;
      padding: 8px 10px;
      font-size: 1.1rem;
      border: 1px solid #ccc;
      outline: none;
      border-radius: 5px;
    }
  }
  .errorHint {
    color: #ff7675;
  }
  .errorInput {
    border-color: #ff7675 !important;
  }
  .fileName {
    display: flex;
    align-items: center;
    background: rgb(223, 223, 223);
    padding: 5px 10px;
    border-radius: 5px;
    position: relative;
    margin-top: 5px;
    i {
      position: absolute;
      top: -30%;
      right: -8px;
      width: 25px;
      height: 25px;
      display: grid;
      place-items: center;
      border-radius: 50%;
      background: var(--main-color);
      color: #fff;
      cursor: pointer;
    }
    &.arabic {
      i {
        right: unset;
        left: -8px;
      }
    }
  }
  .attach {
    input {
      display: none;
    }
    button {
      margin-top: 10px;
      margin-bottom: 10px;
      background-color: transparent;
      color: var(--main-color);
    }
  }
  button {
    width: 100%;
    margin-top: 20px;
    background-color: var(--main-color);
    color: #fff;
    padding: 10px 20px;
    border: 1px solid var(--main-color);
    &:hover {
      background: transparent;
      color: var(--main-color);
    }
  }
}
</style>
