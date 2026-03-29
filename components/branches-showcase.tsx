"use client"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, ExternalLink, Heart } from "lucide-react"
import { branches } from "@/lib/branches-data"
import { cn } from "@/lib/utils"

export function BranchesShowcase() {
  const [selectedBranch, setSelectedBranch] = useState(branches[0])
  const [favorites, setFavorites] = useState<string[]>([])

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]))
  }

  const groupedByCity = branches.reduce(
    (acc, branch) => {
      const city = branch.city
      if (!acc[city]) acc[city] = []
      acc[city].push(branch)
      return acc
    },
    {} as Record<string, typeof branches>,
  )

  return (
    <div className="space-y-8">
      {/* Map Section */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Map Preview */}
        <div className="lg:col-span-2">
          <Card className="h-full overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
            <div className="relative h-96 bg-muted">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="mx-auto mb-4 h-16 w-16 text-primary opacity-50" />
                  <p className="text-muted-foreground">
                    <a
                      href={selectedBranch.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Open {selectedBranch.city} location in Google Maps →
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-balance">{selectedBranch.name}</h3>
                  <p className="text-sm text-muted-foreground">{selectedBranch.city}, Saudi Arabia</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                    <div>
                      <p className="text-sm font-semibold">Address</p>
                      <p className="text-sm text-muted-foreground">{selectedBranch.address}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
                    <div>
                      <p className="text-sm font-semibold">Phone</p>
                      <a href={`tel:${selectedBranch.phone}`} className="text-sm text-primary hover:underline">
                        {selectedBranch.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 flex-shrink-0 text-primary" />
                    <div>
                      <p className="text-sm font-semibold">Email</p>
                      <a href={`mailto:${selectedBranch.email}`} className="text-sm text-primary hover:underline">
                        {selectedBranch.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                    <div>
                      <p className="text-sm font-semibold">Hours</p>
                      <p className="text-sm text-muted-foreground">{selectedBranch.hours}</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button asChild className="flex-1" size="sm">
                    <a href={selectedBranch.mapUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View on Maps
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => toggleFavorite(selectedBranch.id)}
                    className={cn(
                      "transition-colors",
                      favorites.includes(selectedBranch.id) && "bg-red-50 text-red-600 border-red-200 hover:bg-red-100",
                    )}
                  >
                    <Heart className={cn("h-4 w-4", favorites.includes(selectedBranch.id) && "fill-current")} />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Our Locations</CardTitle>
              <CardDescription>Serving Saudi Arabia</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {Object.entries(groupedByCity).map(([city, cityBranches]) => (
                  <div key={city} className="rounded-lg border border-border p-3 hover:bg-muted/50 transition-colors">
                    <p className="font-semibold text-sm">{city}</p>
                    <p className="text-xs text-muted-foreground">
                      {cityBranches.length} branch{cityBranches.length > 1 ? "es" : ""}
                    </p>
                  </div>
                ))}
                <div className="mt-4 rounded-lg bg-primary/10 p-3">
                  <p className="text-sm font-semibold text-primary">{branches.length} Total Branches</p>
                  <p className="text-xs text-muted-foreground">Across 6 major cities</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Branches Grid */}
      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-bold mb-2">All Our Branches</h2>
          <p className="text-muted-foreground">Click on any branch to view detailed information</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {branches.map((branch) => (
            <Card
              key={branch.id}
              className={cn(
                "cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 flex flex-col h-full",
                selectedBranch.id === branch.id
                  ? "border-primary shadow-lg"
                  : "border-transparent hover:border-primary/50",
              )}
              onClick={() => setSelectedBranch(branch)}
            >
              <CardContent className="p-4 flex flex-col flex-1">
                <div className="mb-3 flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-lg text-balance">{branch.city}</h3>
                    <p className="text-xs text-muted-foreground">Branch</p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleFavorite(branch.id)
                    }}
                    className="rounded-full p-2 hover:bg-muted transition-colors"
                  >
                    <Heart
                      className={cn(
                        "h-4 w-4 transition-colors",
                        favorites.includes(branch.id) ? "fill-red-500 text-red-500" : "text-muted-foreground",
                      )}
                    />
                  </button>
                </div>

                {/* الجزء المسؤول عن محاذاة المحتوى */}
                <div className="space-y-2 text-sm mb-4 flex-1">
                  <div className="flex gap-2 text-muted-foreground">
                    <Phone className="h-4 w-4 flex-shrink-0" />
                    <span className="hover:text-primary transition-colors line-clamp-1">
                      {branch.phone}
                    </span>
                  </div>
                  
                  {/* min-h هنا بتضمن إن الكارت يحجز مكان لسطرين عنوان دايماً */}
                  <div className="flex gap-2 text-muted-foreground min-h-[40px]">
                    <MapPin className="h-4 w-4 flex-shrink-0" />
                    <p className="line-clamp-2 leading-tight">{branch.address}</p>
                  </div>
                </div>

                {/* mt-auto بتجبر الزرار يلزق في أسفل الكارت */}
                <Button asChild size="sm" className="w-full mt-auto">
                  <a href={branch.mapUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View on Maps
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <Card className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <CardContent className="p-8 text-center flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-2">Can't find what you need?</h3>
          <p className="mb-6 opacity-90">Contact our main headquarters for additional support</p>
          <Button variant="secondary" asChild className="mb-8">
            <a href="tel:+9668001248882">Call: +966 800 124 8882</a>
          </Button>

          {/* --- NEW SOCIAL MEDIA LINKS --- */}
          <div className="flex items-center justify-center gap-6 pt-6 border-t border-white/20 w-full max-w-md">
            
            {/* WhatsApp */}
            <a href="https://api.whatsapp.com/send/?phone=9668001248882" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-all hover:scale-110" aria-label="WhatsApp">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/company/albarakat-hearing-care/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-all hover:scale-110" aria-label="LinkedIn">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            {/* X (Twitter) */}
            <a href="https://x.com/BarakatHearing" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-all hover:scale-110" aria-label="X (Twitter)">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a href="https://www.instagram.com/albarakathearing" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-all hover:scale-110" aria-label="Instagram">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>

            {/* Facebook */}
            <a href="https://www.facebook.com/BarakatHearingCareCenters" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-all hover:scale-110" aria-label="Facebook">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            {/* YouTube */}
            <a href="https://www.youtube.com/@albarakathearingcare" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-all hover:scale-110" aria-label="YouTube">
              <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>

          </div>
        </CardContent>
      </Card>
    </div>
  )
}
