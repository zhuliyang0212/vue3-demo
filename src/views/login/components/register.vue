<template>
  <div class="register">
    <div class="title">系统注册</div>
    <el-form
      ref="ruleFormRef"
      :model="formData"
      label-width="90px"
      :rules="rules"
    >
      <el-form-item label="用户名:" prop="username">
        <el-input v-model="formData.username" placeholder="请输入用户名">
          <template #prefix>
            <el-icon><Avatar /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item label="昵称:" prop="nickname">
        <el-input v-model="formData.nickname" placeholder="请输入昵称">
          <template #prefix>
            <el-icon><Avatar /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item label="密码:" prop="password">
        <el-input
          v-model="formData.password"
          type="password"
          placeholder="请输入密码"
          show-password
        >
          <template #prefix>
            <el-icon><Lock /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item label="确认密码:" prop="confirmPassword">
        <el-input
          v-model="formData.confirmPassword"
          type="password"
          placeholder="请再次输入密码"
          show-password
        >
          <template #prefix>
            <el-icon><Lock /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="register(ruleFormRef)"
          style="width: 100%"
          >注册</el-button
        >
      </el-form-item>
    </el-form>
    <div class="tip"><span @click="navLogin">去登录</span></div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { ElMessage, ElLoading } from "element-plus";
import request from "@/api/login/index";

const emit = defineEmits(["navLogin"]);

interface RuleForm {
  username: string;
  nickname: string;
  password: string;
  confirmPassword: string;
}

const ruleFormRef = ref<FormInstance>();

let formData = reactive<RuleForm>({
  username: "",
  nickname: "",
  password: "",
  confirmPassword: "",
});

const resetForm = () => {
  formData.username = "";
  formData.nickname = "";
  formData.password = "";
  formData.confirmPassword = "";
};

let rules = reactive<FormRules>({
  username: [
    {
      required: true,
      message: "用户名不能为空",
      trigger: "blur",
    },
  ],
  nickname: [
    {
      required: true,
      message: "昵称不能为空",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "密码不能为空",
      trigger: "blur",
    },
  ],
  confirmPassword: [
    {
      required: true,
      // message: "密码不能为空",
      trigger: "blur",
      validator: (rule, value, callback) => {
        if (value !== formData.password) {
          callback(new Error("两次输入的密码不一致"));
        } else {
          callback();
        }
      },
    },
  ],
});

let register = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      request.register(formData).then((res: any) => {
        if (res.code === 200) {
          resetForm();
          ElMessage({
            message: "注册成功",
            type: "success",
          });
        }
      });
    } else {
      ElMessage({
        message: "注册失败",
        type: "error",
      });
    }
  });
};

let navLogin = () => {
  emit("navLogin");
};
</script>
<style lang="less" scoped>
.register {
  width: 400px;
  height: 370px;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.6);
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 50%;
  left: 60%;
  transform: translate(-50%, -50%);
  padding: 20px;
  .title {
    text-align: center;
    margin-bottom: 20px;
  }
  .tip {
    text-align: right;
    font-size: 14px;
    color: #00a4ff;
    span {
      cursor: pointer;
    }
  }
}
</style>
