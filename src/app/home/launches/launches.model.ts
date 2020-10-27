export interface Launch {
  payload_id: string
  norad_id: number[]
  reused: boolean
  customers: string[]
  nationality: string
  manufacturer: string
  payload_type: string
  payload_mass_kg: null
  payload_mass_lbs: null
  orbit: string
  orbit_params: OrbitParams
  time?: number
}

export interface OrbitParams {
  reference_system: string
  regime: string
  longitude: null
  semi_major_axis_km: number
  eccentricity: number
  periapsis_km: number
  apoapsis_km: number
  inclination_deg: number
  period_min: number
  lifespan_years: null
  epoch: string
  mean_motion: number
  raan: number
  arg_of_pericenter: number
  mean_anomaly: number
}
