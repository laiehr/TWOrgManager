<template>
    <i-table :columns="columns" :data="tableData" :loading="loading">
        <template slot="Action" slot-scope="{row}">
            <i-button @click="checkWorkflow(row.InstanceId, row.StepId)">查看</i-button>
        </template>
    </i-table>
</template>
<script>
import axios from 'axios';
export default {
    data () {
        return {
            loading: false,
            tableData: [],
            columns: [
                {
                    title: "流程类别",
                    key: "WorkflowName"
                },
                {
                    title: "创建者",
                    key: "Owner"
                },
                {
                    title: "创建时间",
                    key: "ArriveOn"
                },
                {
                    title: "该实例版本",
                    key: "Version"
                },
                {
                    title: "操作",
                    slot: "Action"
                }
            ]
        }
    },
    mounted () {
        this.getFlows();
    },
    methods: {
        getFlows () {
            this.loading = true;
            axios.post("/api/workflow/AllFlow", {name: "社团活动申请"}, msg => {
                if (msg.success) {
                    this.tableData = msg.data;
                } else {
                    this.$Message.warning(msg.msg);
                }
                this.loading = false;
            });
        },
        checkWorkflow (instanceId, stepId) {
            window.open(`/manage/org/activityform?instanceId=${instanceId}&stepId=${stepId}&detail=true`);
        }
    }
}
</script>
