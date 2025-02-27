import React, { useState } from "react";

const initialUsers = [
    { id: 1, name: "สมชาย ใจดี", email: "somchai@example.com", phone: "0812345678" },
    { id: 2, name: "มานี มีสุข", email: "manee@example.com", phone: "0898765432" },
    { id: 3, name: "วีระ พงษ์ไพบูลย์", email: "wera@example.com", phone: "0854321987" },
];

const ManageUserspage = () => {
    const [users, setUsers] = useState(initialUsers);
    const [newUser, setNewUser] = useState({ name: "", email: "", phone: "" });
    const [editingUser, setEditingUser] = useState(null); // ใช้เก็บข้อมูลผู้ใช้ที่กำลังแก้ไข

    // เพิ่มผู้ใช้ใหม่
    const addUser = () => {
        if (!newUser.name || !newUser.email || !newUser.phone) return;
        setUsers([...users, { ...newUser, id: users.length + 1 }]);
        setNewUser({ name: "", email: "", phone: "" });
    };

    // ลบผู้ใช้
    const deleteUser = (id) => {
        setUsers(users.filter((user) => user.id !== id));
    };

    // เริ่มแก้ไขผู้ใช้
    const startEditUser = (user) => {
        setEditingUser(user);
        setNewUser(user);
    };

    // บันทึกการแก้ไข
    const saveEditUser = () => {
        setUsers(users.map((u) => (u.id === editingUser.id ? newUser : u)));
        setEditingUser(null);
        setNewUser({ name: "", email: "", phone: "" });
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4 text-center">จัดการผู้ใช้งาน</h2>

            {/* ฟอร์มเพิ่มหรือแก้ไขผู้ใช้ */}
            <div className="mb-4 p-4 border rounded-lg shadow-md bg-white">
                <input
                    type="text"
                    placeholder="ชื่อผู้ใช้"
                    value={newUser.name}
                    onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                    className="border p-2 w-full mb-2"
                />
                <input
                    type="email"
                    placeholder="อีเมล"
                    value={newUser.email}
                    onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                    className="border p-2 w-full mb-2"
                />
                <input
                    type="tel"
                    placeholder="เบอร์โทร"
                    value={newUser.phone}
                    onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })}
                    className="border p-2 w-full mb-2"
                />
                {editingUser ? (
                    <button onClick={saveEditUser} className="bg-yellow-500 text-white px-4 py-2 rounded-md w-full">
                        บันทึกการแก้ไข
                    </button>
                ) : (
                    <button onClick={addUser} className="bg-blue-500 text-white px-4 py-2 rounded-md w-full">
                        เพิ่มผู้ใช้
                    </button>
                )}
            </div>

            {/* รายการผู้ใช้ */}
            <div className="bg-white p-4 shadow-md rounded-lg">
                <h3 className="text-xl font-bold mb-2">รายชื่อผู้ใช้</h3>
                {users.length === 0 ? (
                    <p className="text-gray-500">ไม่มีผู้ใช้ในระบบ</p>
                ) : (
                    <ul className="space-y-2">
                        {users.map((user) => (
                            <li
                                key={user.id}
                                className="flex justify-between items-center border p-2 rounded-lg"
                            >
                                <div>
                                    <h3 className="font-semibold">{user.name}</h3>
                                    <p className="text-gray-600">{user.email}</p>
                                    <p className="text-gray-600">{user.phone}</p>
                                </div>
                                <div className="space-x-2">
                                    <button
                                        onClick={() => startEditUser(user)}
                                        className="bg-yellow-500 text-white px-2 py-1 rounded-md"
                                    >
                                        แก้ไข
                                    </button>
                                    <button
                                        onClick={() => deleteUser(user.id)}
                                        className="bg-red-500 text-white px-2 py-1 rounded-md"
                                    >
                                        ลบ
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default ManageUserspage;
