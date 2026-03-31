import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, company, position, motivation, message } = body

    if (!name || !email) {
      return NextResponse.json({ error: '이름과 이메일은 필수입니다.' }, { status: 400 })
    }

    const { error } = await supabase.from('applications').insert([
      { name, email, phone, company, position, motivation, message },
    ])

    if (error) throw error

    return NextResponse.json({ success: true }, { status: 201 })
  } catch (err: unknown) {
    console.error('apply error:', err)
    const message = err instanceof Error ? err.message : '서버 오류가 발생했습니다.'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
