<template>
    <div class="h-screen flex justify-center items-center">
        <!-- <h1>Register</h1> -->
        <form action="" class="form px-3 py-6">
            <div class="form-title">
                <h1 class="lc-themed">Register</h1>
            </div>
            <div class="input-container flex flex-col">
                <label for="floatingName" class="label">First name</label>
                <input type="text" name="firstname" id="floatingName" class="input border-lc">
            </div>
            <div class=" border-lc-container flex flex-col">
                <label for="floatingName" class="label">Last name</label>
                <input type="text" name="firstname" id="floatingName" class="input border-lc">
            </div>
            <div class="input-container flex flex-col">
                <label for="floatingName" class="label">Email address</label>
                <input type="text" name="firstname" id="floatingName" class="input border-lc">
            </div>
            <div class="input-container flex flex-col">
                <label for="floatingName" class="label">Phone no.</label>
                <input type="text" name="firstname" id="floatingName" class="input border-lc">
            </div>
            <div class="form-footer">
                <button class="btn btn-lg bg-lc-red">Register</button>
            </div>
        </form>
    </div>
</template>
<script>
export default {
}
</script>
<style scoped>
    /* blue:
        #9ACDDA
        red:
        #D90700
        color :
        green: rgb(171,204,55)
        black: #000
    */
    /* Creating semantic classes */
    .h-screen{
        min-height: 100vh;
    }
    /* LC semantics */
    .border-lc{
        border: 2px solid rgb(171,204,55);
    }
    .bg-lc-red{
        background: rgb(171,204,55);
    }
    .lc-themed{
        color: #000;
    }
    .lc-themed::first-letter{
        color: rgb(171,204,55);
    }
    /* end of LC semantics */
    /* Flex box */
    .flex{
        display: flex;
    }
    .flex-col{
        flex-direction: column;
    }
    .justify-center{
        justify-content: center;
    }
    .justify-start{
        justify-content: start;
    }
    .items-center{
        align-items: center;
    }
    /* End of flex box */
    /* Form styling */
    .form{
        width: 25rem;
        color: #000;
        border: 2px solid rgb(171,204,55);
        /* background: #E2E0E0; */
    }
    .label{
        text-align: start;
        line-height: 2rem;
        text-indent: .25rem;
        font-size: 1.1em;
    }
    .input{
        height: 2rem;
        border: 2px solid rgb(171,204,55);
        padding: 1.5rem;
    }
    .form-footer{
        margin-top: 1.5rem;
    }
    /* End of form styling */
    /* semantic element styles */
    .px-3{
        padding-left: 0.75rem;
        padding-right: 0.75rem;
    }
    .py-3{
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
    }
    .py-6{
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
    .btn{
        border: none;
    }
    .btn-lg{
        height: 3rem;
        width: 15rem;
        border-radius: .5rem;
        color: #000;
        font-weight: 600;
    }
</style>