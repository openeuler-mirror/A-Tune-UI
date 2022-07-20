<template>
    <div class="q-pa-sm text-h5 text-weight-bolder">执行命令</div>
    <div class="q-pa-sm">
        <q-card>
            <div class="row">
                <div class="col-12 col-md-7">
                    <div class="row q-pa-sm">
                        <div class="col-12 col-sm-4 text-subtitle1 text-weight-bolder">选择运行模式
                        </div>
                        <div class="col-12 col-sm-8 q-gutter-sm">
                            <q-btn-toggle v-model="tuningMode" toggle-color="blue" :options="[
                                { label: '单机模式', value: 'single' },
                                { label: '分节点模式', value: 'two' },
                                { label: '集群模式', value: 'three' }
                            ]" />
                        </div>
                    </div>
                    <div class="row q-pa-sm">
                        <div class="col-12 col-sm-4 text-subtitle1 text-weight-bolder">
                        </div>
                        <div class="col-12 col-sm-3 q-gutter-sm">
                            <q-select color="blue" v-model="ip" :options="ipOptions" label="CLient IP" />
                        </div>
                    </div>

                    <div class="row q-pa-sm">
                        <div class="col-12 col-sm-4 text-subtitle1 text-weight-bolder">发起命令
                        </div>
                        <div class="col-12 col-sm-4 q-gutter-sm">
                            <q-select color="blue" v-model="command" :options="commandOptions" label="Command"
                                @click="showCommandArguments" />
                        </div>
                    </div>
                    <div v-if="command === 'tuning'">
                        <div class="row q-pa-sm">
                            <div class="col-12 col-sm-4 text-subtitle1 text-weight-bolder">参数
                            </div>
                            <div class="col-12 col-sm-5 q-gutter-sm">
                                <q-btn-dropdown color="blue" label="添加参数">
                                    <q-list>
                                        <q-item clickable v-close-popup @click="addTunningArgument('--project')">
                                            <q-item-section>
                                                <q-item-label>--project</q-item-label>
                                            </q-item-section>
                                        </q-item>

                                        <q-item clickable v-close-popup @click="addTunningArgument('--restart')">
                                            <q-item-section>
                                                <q-item-label>--restart</q-item-label>
                                            </q-item-section>
                                        </q-item>

                                        <q-item clickable v-close-popup @click="addTunningArgument('--restore')">
                                            <q-item-section>
                                                <q-item-label>--restore</q-item-label>
                                            </q-item-section>
                                        </q-item>

                                        <q-item clickable v-close-popup @click="addTunningArgument('--help')">
                                            <q-item-section>
                                                <q-item-label>--help</q-item-label>
                                            </q-item-section>
                                        </q-item>

                                        <q-item clickable v-close-popup @click="addTunningArgument('--detail')">
                                            <q-item-section>
                                                <q-item-label>--detail</q-item-label>
                                            </q-item-section>
                                        </q-item>
                                    </q-list>
                                </q-btn-dropdown>
                                <q-btn round color="warning" @click="resetTunningArgument">
                                    <q-icon size="sm" name="clear" />
                                </q-btn>


                            </div>
                        </div>
                        <div v-for="argument in argumentList">
                            <argumentRadio v-if="true" :tunningArgument="argument" @update="updateProjectName"
                                @remove="removeTunningArgument">
                            </argumentRadio>
                        </div>

                    </div>
                    <div v-if="command != 'tuning'">
                        <div class="row q-pa-sm">
                            <div class="col-12 col-sm-4 text-subtitle1 text-weight-bolder">
                            </div>
                            <div class="col-12 col-sm-3 text-subtitle1 text-weight-bolder">
                                暂未适配
                            </div>
                        </div>
                    </div>
                    <div class="row q-pa-sm">
                        <div class="col-12 col-sm-4 text-subtitle1 text-weight-bolder">
                            配置文件
                        </div>

                        <div class="flex q-gutter-sm col-sm-8">
                            <q-file filled bottom-slots v-model="configFile" label="或直接上传"
                                @update:model-value="updateCommandString" counter max-files="1">
                                <template v-slot:before>
                                    <!-- @blur="updateCommandString" -->
                                    <q-input clearable @blur="updateCommandString" color="blue" v-model="configURL"
                                        label="填写路径" />
                                </template>
                                <template v-slot:append>
                                    <q-icon v-if="configFile !== null" name="close" @click.stop="configFile = null"
                                        class="cursor-pointer" />
                                    <q-icon name="create_new_folder" @click.stop />
                                </template>

                                <template v-slot:hint>
                                    Field hint
                                </template>
                            </q-file>

                        </div>
                    </div>
                    <div class="row q-pa-sm">
                        <div class="col-12 col-sm-4 text-subtitle1 text-weight-bolder">
                            命令
                        </div>
                        <div class="col-12 col-sm-8">
                            <q-card dark bordered class="bg-grey-9 ">
                                <div class="q-pa-md text-h5">{{ commandString }}</div>
                            </q-card>
                        </div>
                    </div>
                    <div class="row q-pa-sm">
                        <div class="col-12 col-sm-4 text-subtitle1 text-weight-bolder">
                            命令回显
                        </div>
                        <div class="col-12 col-sm-8">
                            <div id="xterm" class="xterm" />
                        </div>

                    </div>
                </div>
                <div class="col-12 col-md-5">
                    <div class="row q-pa-sm">
                    </div>
                    <div class="row q-pa-sm">
                        <!-- <div id="xterm" class="xterm" /> -->
                    </div>
                </div>
            </div>

        </q-card>

    </div>

</template>

<script setup>
import { ref, onMounted } from "vue"
import 'xterm/css/xterm.css'
import { Terminal } from 'xterm'
import argumentRadio from './ArgumentRadio.vue'



let tuningMode = ref()
let commandOptions = ref()
let ipOptions = ref()
let command = ref("tuning")
let ip = ref()
let argumentList = ref([])
let commandString = ref('atune-adm')
let configURL = ref()
let configFile = ref()
let projectName = ref('')
const term = new Terminal();

commandOptions = [
    'tuning', 'analysis', 'other'
]
ipOptions = [
    '192.168.10.1',
    '192.168.10.2'
]
onMounted(() => {
    term.open(document.getElementById('xterm'));
    term.write(' atune-adm - atune-adm is a command line client for atuned AI tuning system\r\n')
    term.write(' atune-adm - atune-adm is a command line client for atuned AI tuning system\r\n')
    updateXtrem()
})
const showCommandArguments = () => {

}

const addTunningArgument = argument => {
    argumentList.value.push(argument)
    updateCommandString()
}

const resetTunningArgument = () => {
    argumentList.value = []
    commandString.value = `atune-adm ${command.value}`
}

const removeTunningArgument = targetArgument => {
    for (let argument of argumentList.value) {
        if (argument === targetArgument) {
            argumentList.value.splice(argumentList.value.indexOf(argument), 1)
        }
    }
    updateCommandString()
}

const updateProjectName = (name) => {
    projectName.value = name
    updateCommandString()
}

const updateCommandString = () => {
    commandString.value = `atune-adm ${command.value}`
    for (let argument of argumentList.value) {
        commandString.value += ` ${argument}`
        if (argument === '--project') {
            commandString.value += ` ${projectName.value}`
        }
    }
    if (configFile.value) {
        commandString.value += ` ${configFile.value.name || ''}`
    } else {
        commandString.value += ` ${configURL.value || ''}`
    }
}


const updateXtrem = () => {
    setInterval(() => { term.write(' 发送心跳包 \r\n') }, 5000);
}


</script>

<style>
</style>