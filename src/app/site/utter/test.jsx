"use client";
import "jquery";
import $ from "jquery";
import Image from "next/image"
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import CookieHeader from "../../components/CookieHeader";
import CookieFooter from "../../components/CookieFooter";
import "../../../../public/assets/css/Cookies.modules.css";
import allFunctions from "../../../../public/test";


export default function KhrimiPage() {
    const { sayHello, anotherFunction } = allFunctions;
    return (
        <>
            <button onClick={(e) => sayHello()}>
                Say Hello
            </button>
        </>
    )
}
