<template>
  <div class="login">
    <div class="title">系统登录</div>
    <el-form
      ref="ruleFormRef"
      :model="formData"
      label-width="60px"
      :rules="rules"
    >
      <el-form-item label="用户名:">
        <el-input
          prop="username"
          v-model="formData.username"
          placeholder="请输入用户名"
        >
          <template #prefix>
            <el-icon><Avatar /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item label="密码:">
        <el-input
          prop="password"
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
      <el-form-item>
        <el-button
          type="primary"
          @click="login(ruleFormRef)"
          style="width: 100%"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
    <div class="tip" @click="navRegister">立即注册</div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { ElMessage, ElLoading } from "element-plus";
import { useRouter } from "vue-router";
import request from "@/api/login/index";
import { userInfo } from "@/store/modules/login";

const router = useRouter();
const emit = defineEmits(["navRegister"]);

interface RuleForm {
  username: string;
  password: string;
}

const ruleFormRef = ref<FormInstance>();

let formData = reactive<RuleForm>({
  username: "",
  password: "",
});

let rules = reactive<FormRules>({
  username: [
    {
      required: true,
      message: "用户名不能为空",
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
});

let login = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      request.login(formData).then((res: { token: string }) => {
        userInfo().state.token = res.token;
        sessionStorage.setItem("token", res.token);
        ElMessage({
          message: "登录成功",
          type: "success",
        });
        router.push("./dashboard");
      });
    } else {
      console.log("登录失败!", fields);
    }
  });
};

let navRegister = () => {
  emit("navRegister");
};
</script>
<style lang="less" scoped>
.login {
  width: 400px;
  height: 270px;
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
    cursor: pointer;
  }
}
</style>
