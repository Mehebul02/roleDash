import { Table, Tag, Button, Space, Input, Dropdown, Menu } from "antd";
import { MoreOutlined, EditOutlined, DeleteOutlined, UserSwitchOutlined } from "@ant-design/icons";
import { useState } from "react";

interface User {
  key: string;
  name: string;
  email: string;
  role: string;
  status: string;
}

const usersData: User[] = [
  {
    key: "1",
    name: "Mehebul Alif",
    email: "alif@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    key: "2",
    name: "John Doe",
    email: "john@example.com",
    role: "User",
    status: "Inactive",
  },
  {
    key: "3",
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Moderator",
    status: "Active",
  },
];

const UserDashboard = () => {
  const [searchText, setSearchText] = useState("");

  const handleMenuClick = (key: string, record: User) => {
    if (key === "edit") {
      alert(`Editing user: ${record.name}`);
    } else if (key === "delete") {
      alert(`Deleting user: ${record.name}`);
    } else if (key === "role") {
      alert(`Changing role for: ${record.name}`);
    }
  };

  const menu = (record: User) => (
    <Menu
      onClick={({ key }) => handleMenuClick(key, record)}
      items={[
        {
          key: "edit",
          icon: <EditOutlined />,
          label: "Edit",
        },
        {
          key: "delete",
          icon: <DeleteOutlined />,
          label: "Delete",
        },
        {
          key: "role",
          icon: <UserSwitchOutlined />,
          label: "Change Role",
        },
      ]}
    />
  );

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      filteredValue: searchText ? [searchText] : null,
      onFilter: (value: any, record: User) =>
        record.name.toLowerCase().includes(value.toLowerCase()) ||
        record.email.toLowerCase().includes(value.toLowerCase()),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      render: (role: string) => (
        <Tag color={role === "Admin" ? "red" : role === "Moderator" ? "blue" : "green"}>
          {role}
        </Tag>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <Tag color={status === "Active" ? "green" : "volcano"}>{status}</Tag>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_: any, record: User) => (
        <Dropdown overlay={menu(record)} trigger={["click"]}>
          <Button icon={<MoreOutlined />} />
        </Dropdown>
      ),
    },
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">👤 User Management</h1>
      <Input.Search
        placeholder="Search by name or email"
        allowClear
        onSearch={(value:any) => setSearchText(value)}
        style={{ marginBottom: 16, maxWidth: 300 }}
      />
      <Table columns={columns} dataSource={usersData} />
    </div>
  );
};

export default UserDashboard;
