<template>



 <b-container class="bv-homa-page">
 <h1>Add Lead Passenger </h1>
 <h6> Lead Passenger Details </h6>

    <div>

        <div v-if="loading">
            <!-- here put a spinner or whatever you want to indicate that a request is in progress -->
        
        

 <b-button variant="primary" disabled>
    <b-spinner small></b-spinner>
    <span class="sr-only">Loading...</span>
  </b-button>

  <b-button variant="primary" disabled>
    <b-spinner small type="grow"></b-spinner>
    Loading...
  </b-button>
</div>

    
    </div>


    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
 <b-row>
<b-col> 
<b-card class="mb-1">

      <b-form-group id="input-group-1" label-for="input-1">
        <b-form-select
          id="input-1"
          v-model="form.title"
          :options="titles"
          required
        ></b-form-select>
      </b-form-group>

  <b-form-group id="input-group-2" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.firstName"
          required
          placeholder="Forname"
        ></b-form-input>
      </b-form-group>

 <b-form-group id="input-group-3" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.passportNo"
          
          placeholder="Passport No"
        ></b-form-input>
      </b-form-group>

  <b-form-group id="input-group-4" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="form.emailAddress"
          type="email" 
          placeholder="Email"
        ></b-form-input>
      </b-form-group>

        <b-form-group id="input-group-5" label-for="input-5">
        <b-form-input
          id="input-5"
          v-model="form.mobileNo"
          
          placeholder="Mobile"
        ></b-form-input>
      </b-form-group>

        <b-form-group id="input-group-6" label-for="input-6">
        <b-form-input
          id="input-6"
          v-model="form.specialNotes"
          
          placeholder="Sp. Ins."
        ></b-form-input>
      </b-form-group>

</b-card>
</b-col>

<b-col> 
<b-card class="mb-2">
     
   <b-form-group id="input-group-7" label-for="input-7">
        <b-form-input
          id="input-7"
          v-model="form.lastName"
          required
          placeholder="Surname"
        ></b-form-input>
      </b-form-group>


    <b-form-group id="input-group-8" label-for="input-8">
<b-form-datepicker 
id="input-8" 
v-model="form.dateOfBirth" 
class="mb-2">
</b-form-datepicker>
    </b-form-group>

         <b-form-group id="input-group-9" label-for="input-9">
        <b-form-input
          id="input-9"
          v-model="form.signage"
          
          placeholder="Signage"
        ></b-form-input>
      </b-form-group>

         <b-form-group id="input-group-10" label-for="input-10">
        <b-form-input
          id="input-10"
          v-model="form.phoneNo"
          
          placeholder="Phone"
        ></b-form-input>
      </b-form-group>


</b-card>
</b-col>
</b-row>

<b-row>

<b-col>
   <h6>Driver Details </h6>
  <b-card>
<b-row>
<b-col>
   <b-form-group id="input-group-11" label-for="input-11">
        <b-form-input
          id="input-11"
          v-model="form.driverName"
          
          placeholder="Name"
        ></b-form-input>
      </b-form-group>
</b-col>

<b-col>
         <b-form-group id="input-group-12" label-for="input-12">
        <b-form-input
          id="input-12"
          v-model="form.driverMobileNo"
          
          placeholder="Mobile"
        ></b-form-input>
      </b-form-group>
</b-col>

<b-col>
         <b-form-group id="input-group-13" label-for="input-13">
        <b-form-input
          id="input-13"
          v-model="form.driverEmailAddress"
          type="email" 
          placeholder="Email"
        ></b-form-input>
      </b-form-group>
</b-col>
</b-row>


 <b-row class="text-center" align-v="center">
    <b-col></b-col>
    <b-col></b-col>
    <b-col><b-button class="main-navigation-button" variant="danger" type="reset">Reset</b-button> 
    <b-button class="main-navigation-button" variant="primary" type="submit">Save Lead Passenger</b-button></b-col>
  </b-row>
 
  
   </b-card>  
</b-col>

</b-row>

  </b-form>
 </b-container>
</template>

<script>
import axios from 'axios'
//import FormData from 'form-data'
  export default {
    data() {
   
      return {
        form: {
          title: '',
          firstName: '',
          lastName: '',
          dateOfBirth: '',
          passportNo: '',
          emailAddress: '',
          phoneNo: '',
          mobileNo: '',
          signage: '',
          specialNotes: '',
          driverName: '',
          driverMobileNo: '',
          driverEmailAddress: ''

        //  checked: []
        },
        titles: [{ text: 'Select Title', value: null },
         'Mr', 'Mrs.', 'Ms.', 'Dr.','Mstr.','Miss','Mx.','Prof.','Rev.','Sir','Sister'],
        show: true,
           loading: true
      }
    },

    methods: {
      onSubmit(evt) {
        evt.preventDefault()
//axio
var data = new FormData();
  data.append('title', this.form.title);
  data.append('firstName', this.form.firstName);
  data.append('lastName', this.form.lastName);
  data.append('dateOfBirth',this.form.dateOfBirth);
  data.append('passportNo',this.form.passportNo);
  data.append('emailAddress',this.form.emailAddress);
  data.append('phoneNo',this.form.phoneNo);
  data.append('mobileNo',this.form.mobileNo);
  data.append('signage',this.form.signage);
  data.append('specialNotes',this.form.specialNotes);
  data.append('driverName',this.form.driverName);
  data.append('driverMobileNo',this.form.driverMobileNo);
  data.append('driverEmailAddress',this.form.driverEmailAddress);

var config = {
  method: 'post',
  url: '/api/saveLeadPassenger',
  headers: { 
    'Gac-Api-Key': 'TB9CYqG6j4sIU2c', 
    'Gac-App-Key': 'p0ShVin3',
    //...form.getHeaders()
   }
  ,  data : data
};

 this.loading = true //the loading begin
axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
  alert(JSON.stringify(response.data))
})
.catch(function (error) {
  console.log(error);
})
.finally(() => (this.loading = false));

       // alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.title = null
        this.form.firstName = ''
        this.form.lastName = ''
        this.form.passportNo = ''
        this.form.phoneNo = ''
        this.form.signage = ''
        this.form.specialNotes = ''
        this.form.mobileNo = ''
        this.form.emailAddress = ''
        this.form.driverEmailAddress = ''
        this.form.driverName = ''
        this.form.driverMobileNo = ''
        this.form.dateOfBirth = ''

      //  this.form.title = null
     //   this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>











