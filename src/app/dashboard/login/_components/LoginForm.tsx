"use client";

import { useState } from "react";
import Link from "next/link";

import { useActionState } from "react";

import { loginAction } from "../actions";

import { ArrowLeft, Lock, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, formAction, pending] = useActionState(loginAction, null);

  return (
    <div className="w-full max-w-md rounded-3xl border border-border bg-card/60 p-8 shadow-xl backdrop-blur">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft size={16} />
        Voltar ao site
      </Link>

      <div>
        <h1 className="text-3xl font-bold">
          Edita<span className="text-primary">Criativo</span>
        </h1>

        <p className="mt-2 text-muted-foreground">Dashboard Analytics</p>
      </div>

      <form action={formAction} className="mt-10 space-y-5">
        <div className="space-y-2">
          <label className="text-sm font-medium">E-mail</label>

          <div className="relative">
            <Mail
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />

            <Input
              name="email"
              type="email"
              placeholder="email@editacriativo.com"
              className="pl-10"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Palavra-passe</label>

          <div className="relative">
            <Lock
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />

            <Input
              name="password"
              type="password"
              placeholder="••••••••"
              className="pl-10"
              required
            />
          </div>
        </div>

        <Button type="submit" className="w-full" disabled={pending}>
          {pending ? "A entrar..." : "Entrar"}
        </Button>

        {error && <p className="text-sm text-destructive">{error}</p>}
      </form>
    </div>
  );
}
