let tableCol = {
    member: [
        {
            title: '姓名',
            key: 'RealName'
        },
        {
            title: '学号',
            key: 'Code'
        },
        {
            title: '手机',
            key: 'Mobile'
        },
        {
            title: '所属社团',
            key: 'departName'
        },
        {
            title: '生源地',
            key: 'Source'
        },
        {
            title: '操作',
            width: 300,
            slot: 'Action'
        }
    ],
    subDept: [
        {
            title: '部门名称',
            key: 'name'
        },
        {
            title: '部门层级显示',
            key: 'label'
        },
        {
            title: '部门类型',
            key: 'Type'
        },
        {
            title: '管理员姓名',
            key: 'admin'
        },
        {
            title: '操作',
            slot: 'Action'
        }
    ],
    tutor: [
        {
            title: '姓名',
            key: 'RealName'
        },
        {
            title: '工号',
            key: 'Code'
        },
        {
            title: '手机',
            key: 'Mobile'
        },
        {
            title: '操作',
            slot: 'Action'
        }
    ],
    manager: [
        {
            title: '姓名',
            key: 'Name'
        },
        {
            title: '手机',
            key: 'Mobile'
        },
        {
            title: '邮箱',
            key: 'Email'
        },
        {
            title: '操作',
            slot: 'Action'
        }
    ],
    activity: [
        {
            title: '活动名称',
            key: 'Name'
        },
        {
            title: '活动类型',
            key: 'Category'
        },
        {
            title: '活动时间',
            key: 'Time'
        },
        {
            title: '活动地点',
            key: 'Location'
        },
        {
            title: '操作',
            slot: 'Action'
        }
    ],
    operation: [
        {
            title: '操作',
            key: 'MethodName'
        },
        {
            title: '操作人员',
            key: 'CreatedBy'
        },
        {
            title: '具体描述',
            key: 'Description'
        },
        {
            title: 'IP地址',
            key: 'IPAddress'
        },
        {
            title: '记录时间',
            key: 'CreatedOn'
        }
    ]
};
module.exports = tableCol;
