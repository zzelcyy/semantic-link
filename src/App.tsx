import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui';

function App() {
  return (
    <main className="min-h-screen bg-background text-foreground p-8">
      <section className="mx-auto max-w-4xl space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Semantic Link</h1>
          <p className="text-muted-foreground">
            문서와 개념을 연결해서 의미 관계를 시각화하는 작업 공간
          </p>
        </div>

        <div className="flex gap-3">
          <Button>새 문서 만들기</Button>
          <Button variant="outline">그래프 보기</Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>첫 번째 노트</CardTitle>
            <CardDescription>semantic-link 시작용 샘플 카드</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-7 text-muted-foreground">
              여기에 문서 내용, 키워드, 연결된 개념들이 들어갈 예정입니다.
            </p>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}

export default App;
