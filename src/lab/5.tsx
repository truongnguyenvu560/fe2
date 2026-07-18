import { Button, Form, Input, Select } from "antd"
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const CATEGORY_OPTIONS = [
    { value: "Technology", label: "Technology" },
    { value: "Education", label: "Education" },
    { value: "Sports", label: "Sports" },
    { value: "Entertainment", label: "Entertainment" },
];

function Lab5() {
    const { mutate } = useMutation({
        mutationFn: async (data: any) => {
            await axios.post("http://localhost:3000/stories", data)
        },
        onSuccess: () => {
            toast.success("Thêm thành công")
        },
        onError: () => {
            toast.error("Thêm thất bại")
        }
    })
    const onFinish = (values: any) => {
        console.log(values);
        mutate(values);
    };
    return (
        <div>
            <h2>Lab5</h2>
            <Form onFinish={onFinish} layout="vertical">
                <Form.Item
                    label="title"
                    name="title" rules={[
                        { required: true },
                        {
                            min: 3,
                        },
                    ]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Tác giả" name="author">
                    <Input />
                </Form.Item>

                <Form.Item label="Image URL" name="cover">
                    <Input />
                </Form.Item>

                <Form.Item label="Mô tả" name="description">
                    <Input.TextArea rows={4} />
                </Form.Item>
                <Form.Item
                    label="Danh mục"
                    name="category"
                    rules={[{ required: true, message: "Vui lòng chọn danh mục!" }]}
                >
                    <Select
                        placeholder="Chọn danh mục"
                        options={CATEGORY_OPTIONS}
                        showSearch // Cho phép tìm kiếm nhanh danh mục khi gõ chữ
                        filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                    />
                </Form.Item>

                <Button htmlType="submit">Submit</Button>
            </Form>
        </div>
    );
}

export default Lab5;