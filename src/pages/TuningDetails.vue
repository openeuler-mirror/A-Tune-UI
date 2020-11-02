<template>
  <q-page class="q-py-xl q-mx-auto bg-grey-4" style="overflow: auto">
    <div id="tuning-main" class="text-center" style="display: grid">
      <div class="text-h5" style="">{{ fileName }}</div>
      <div class="text-subtitle1">engine:&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-body1">{{ fileEngine }}</span></div>
      <div class="text-subtitle1">round:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-body1">{{ fileRound }}</span></div>
      <div class="text-subtitle1">status:&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-body1">{{ fileStatus }}</span></div>
      <div id="compare-tuning-form" class="q-mx-auto tuning-middle" style="display: none">
        <q-form @submit="onSubmit" class="q-gutter-md" style="width: 100%; display: flow-root; float: right;">
          <q-btn label="Submit" type="submit" class="vertical-middle" style="float: right; margin-right: 30px" color="primary"/>
          <q-select
            filled
            v-model="modelCompare"
            multiple
            :options="optionCompare"
            label="Compare With"
            max-values="5"
            counter
            hint="Select up to 5 files to compare"
            style="width: 300px; float: right"
          />
        </q-form>
      </div>
      <div id="tuning-evaluation" class="q-mx-auto tuning-middle"></div>
      <div id="tuning-details" class="q-py-md q-mx-auto tuning-middle"></div>
      <div id="tuning-param-form" class="q-mx-auto tuning-middle" style="min-width: 1550px">

        <div class="q-pa-md">
          <q-table
            title="Parameters"
            :data="paramTable"
            :columns="columns"
            row-key="name"
            :sort-method="paramSort"
            :visible-columns="visibleColumns"
            :pagination.sync="pagination"
            style="max-height: 1154px"
          >
            <template v-slot:top>
              <span class="text-h5">&nbsp;&nbsp;&nbsp;&nbsp;Parameters</span>

              <q-space />

              <q-select
                v-model="visibleColumns"
                multiple
                outlined
                dense
                options-dense
                :display-value="$q.lang.table.columns"
                emit-value
                map-options
                :options="columns"
                option-value="name"
                options-cover
                style="min-width: 50px"
              />
            </template>

          </q-table>
        </div>

      </div>
    </div>    
  </q-page>
</template>

<script>
import TuningDetails from '../static/js/tuning-details'

export default {
  ...TuningDetails
}
</script>

<style>
@import '../css/tuning.css'
</style>
